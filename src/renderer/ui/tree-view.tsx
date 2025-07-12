import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronRight } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '@/renderer/lib/utils'

const treeVariants = cva(
    'group hover:before:opacity-100 before:absolute before:rounded-lg before:left-0 px-2 before:w-full before:opacity-0 before:bg-accent/70 before:h-[2rem] before:-z-10'
)

const selectedTreeVariants = cva(
    'bg-muted/50 text-foreground'
)

const dragOverVariants = cva(
    'before:opacity-100 before:bg-primary/20 text-primary-foreground'
)

interface TreeDataItem {
    id: string
    name: string
    icon?: any
    selectedIcon?: any
    openIcon?: any
    children?: TreeDataItem[]
    actions?: React.ReactNode
    onClick?: () => void
    draggable?: boolean
    droppable?: boolean
    disabled?: boolean
    length?: number
}

export interface TreeViewRef {
    expandToNode: (nodeId: string) => void
    expandAll: () => void
    collapseAll: () => void
    expandPath: (path: string[]) => void
    getExpandedNodes: () => string[]
}

type TreeProps = React.HTMLAttributes<HTMLDivElement> & {
    data: TreeDataItem[] | TreeDataItem
    initialSelectedItemId?: string
    onSelectChange?: (item: TreeDataItem | undefined) => void
    onHoverChange?: (item: TreeDataItem | undefined) => void
    expandAll?: boolean
    defaultNodeIcon?: any
    defaultLeafIcon?: any
    onDocumentDrag?: (sourceItem: TreeDataItem, targetItem: TreeDataItem) => void
}

const TreeView = React.forwardRef<TreeViewRef, TreeProps>(
    (
        {
            data,
            initialSelectedItemId,
            onSelectChange,
            onHoverChange,
            expandAll,
            defaultLeafIcon,
            defaultNodeIcon,
            className,
            onDocumentDrag,
            ...props
        },
        ref
    ) => {
        const [selectedItemId, setSelectedItemId] = React.useState<
            string | undefined
        >(initialSelectedItemId)
        
        const [draggedItem, setDraggedItem] = React.useState<TreeDataItem | null>(null)
        
        // 用于控制展开状态的state
        const [expandedItemIds, setExpandedItemIds] = React.useState<string[]>(() => {
            if (!initialSelectedItemId) {
                return expandAll ? getAllNodeIds(data) : []
            }

            const ids: string[] = []

            function walkTreeItems(
                items: TreeDataItem[] | TreeDataItem,
                targetId: string
            ) {
                if (items instanceof Array) {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i]!.children) {
                            ids.push(items[i]!.id)
                        }
                        if (walkTreeItems(items[i]!, targetId) && !expandAll) {
                            return true
                        }
                        if (!expandAll && !items[i]!.children) ids.pop()
                    }
                } else if (!expandAll && items.id === targetId) {
                    return true
                } else if (items.children) {
                    return walkTreeItems(items.children, targetId)
                }
            }

            walkTreeItems(data, initialSelectedItemId)
            return expandAll ? getAllNodeIds(data) : ids
        })

        // 获取所有节点ID的辅助函数
        function getAllNodeIds(items: TreeDataItem[] | TreeDataItem): string[] {
            const ids: string[] = []
            const traverse = (nodes: TreeDataItem[] | TreeDataItem) => {
                const nodeArray = Array.isArray(nodes) ? nodes : [nodes]
                nodeArray.forEach(node => {
                    if (node.children && node.children.length > 0) {
                        ids.push(node.id)
                        traverse(node.children)
                    }
                })
            }
            traverse(items)
            return ids
        }

        // 找到节点路径的辅助函数
        function findNodePath(items: TreeDataItem[] | TreeDataItem, targetName: string): string[] {
            const path: string[] = []
            
            function traverse(nodes: TreeDataItem[] | TreeDataItem, currentPath: string[]): boolean {
                const nodeArray = Array.isArray(nodes) ? nodes : [nodes]
                
                for (const node of nodeArray) {
                    const newPath = [...currentPath, node.id]  // ✅ 始终包含当前节点
                    
                    // ✅ 支持多种匹配方式
                    const isMatch = 
                        node.name === targetName ||                           // 精确匹配
                        node.name.endsWith(`-${targetName}`) ||               // 匹配 "索引-名称" 格式
                        node.name.split('-')[1] === targetName ||             // 提取名称部分匹配
                        node.id === targetName                                // ID 匹配
                    
                    if (isMatch) {
                        path.push(...newPath)
                        return true
                    }
                    
                    if (node.children && traverse(node.children, newPath)) {
                        return true
                    }
                }
                return false
            }
            
            traverse(items, [])
            return path
        }

        // 找到目标节点的辅助函数
        function findTargetNode(items: TreeDataItem[] | TreeDataItem, targetName: string): TreeDataItem | null {
            function traverse(nodes: TreeDataItem[] | TreeDataItem): TreeDataItem | null {
                const nodeArray = Array.isArray(nodes) ? nodes : [nodes]
                
                for (const node of nodeArray) {
                    // 支持多种匹配方式
                    const isMatch = 
                        node.name === targetName ||                           // 精确匹配
                        node.name.endsWith(`-${targetName}`) ||               // 匹配 "索引-名称" 格式
                        node.name.split('-')[1] === targetName ||             // 提取名称部分匹配
                        node.id === targetName                                // ID 匹配
                    
                    if (isMatch) {
                        return node
                    }
                    
                    if (node.children) {
                        const found = traverse(node.children)
                        if (found) return found
                    }
                }
                return null
            }
            
            return traverse(items)
        }

        // 暴露给ref的方法
        React.useImperativeHandle(ref, () => ({
            expandToNode: (nodeName: string) => {
                const pathToNode = findNodePath(data, nodeName)
                const targetNode = findTargetNode(data, nodeName)
                
                if (pathToNode.length > 0) {
                    // 展开路径
                    setExpandedItemIds(prev => {
                        const newExpanded = new Set([...prev, ...pathToNode])
                        return Array.from(newExpanded)
                    })
                    
                    // 选中目标节点
                    if (targetNode) {
                        setSelectedItemId(targetNode.id)
                        if (onSelectChange) {
                            onSelectChange(targetNode)
                        }
                    }
                }
            },
            expandAll: () => {
                setExpandedItemIds(getAllNodeIds(data))
            },
            collapseAll: () => {
                setExpandedItemIds([])
            },
            expandPath: (path: string[]) => {
                setExpandedItemIds(prev => {
                    const newExpanded = new Set([...prev, ...path])
                    return Array.from(newExpanded)
                })
            },
            getExpandedNodes: () => {
                return expandedItemIds
            }
        }), [data, expandedItemIds])

        const handleSelectChange = React.useCallback(
            (item: TreeDataItem | undefined) => {
                setSelectedItemId(item?.id)
                if (onSelectChange) {
                    onSelectChange(item)
                }
            },
            [onSelectChange]
        )

        const handleHoverChange = React.useCallback(
            (item: TreeDataItem | undefined) => {
                if (onHoverChange) {
                    onHoverChange(item)
                }
            },
            [onHoverChange]
        )

        const handleDragStart = React.useCallback((item: TreeDataItem) => {
            setDraggedItem(item)
        }, [])

        const handleDrop = React.useCallback((targetItem: TreeDataItem) => {
            if (draggedItem && onDocumentDrag && draggedItem.id !== targetItem.id) {
                onDocumentDrag(draggedItem, targetItem)
            }
            setDraggedItem(null)
        }, [draggedItem, onDocumentDrag])

        return (
            <div className={cn('overflow-auto relative p-2', className)}>
                <TreeItem
                    data={data}
                    selectedItemId={selectedItemId}
                    handleSelectChange={handleSelectChange}
                    handleHoverChange={handleHoverChange}
                    expandedItemIds={expandedItemIds}
                    setExpandedItemIds={setExpandedItemIds}
                    defaultLeafIcon={defaultLeafIcon}
                    defaultNodeIcon={defaultNodeIcon}
                    handleDragStart={handleDragStart}
                    handleDrop={handleDrop}
                    draggedItem={draggedItem}
                    {...props}
                />
                <div
                    className='w-full h-[48px]'
                    onDrop={(e) => { handleDrop({id: '', name: 'parent_div'})}}>

                </div>
            </div>
        )
    }
)
TreeView.displayName = 'TreeView'

type TreeItemProps = Omit<TreeProps, 'expandAll'> & {
    selectedItemId?: string
    handleSelectChange: (item: TreeDataItem | undefined) => void
    handleHoverChange: (item: TreeDataItem | undefined) => void
    expandedItemIds: string[]
    setExpandedItemIds: React.Dispatch<React.SetStateAction<string[]>>
    defaultNodeIcon?: any
    defaultLeafIcon?: any
    handleDragStart?: (item: TreeDataItem) => void
    handleDrop?: (item: TreeDataItem) => void
    draggedItem: TreeDataItem | null
}

const TreeItem = React.forwardRef<HTMLDivElement, TreeItemProps>(
    (
        {
            className,
            data,
            selectedItemId,
            handleSelectChange,
            handleHoverChange,
            expandedItemIds,
            setExpandedItemIds,
            defaultNodeIcon,
            defaultLeafIcon,
            handleDragStart,
            handleDrop,
            draggedItem,
            ...props
        },
        ref
    ) => {
        if (!(data instanceof Array)) {
            data = [data]
        }
        return (
            <div ref={ref} role="tree" className={className} {...props}>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.children ? (
                                <TreeNode
                                    item={item}
                                    selectedItemId={selectedItemId}
                                    expandedItemIds={expandedItemIds}
                                    setExpandedItemIds={setExpandedItemIds}
                                    handleSelectChange={handleSelectChange}
                                    handleHoverChange={handleHoverChange}
                                    defaultNodeIcon={defaultNodeIcon}
                                    defaultLeafIcon={defaultLeafIcon}
                                    handleDragStart={handleDragStart}
                                    handleDrop={handleDrop}
                                    draggedItem={draggedItem}
                                />
                            ) : (
                                <TreeLeaf
                                    item={item}
                                    selectedItemId={selectedItemId}
                                    handleSelectChange={handleSelectChange}
                                    handleHoverChange={handleHoverChange}
                                    defaultLeafIcon={defaultLeafIcon}
                                    handleDragStart={handleDragStart}
                                    handleDrop={handleDrop}
                                    draggedItem={draggedItem}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
)
TreeItem.displayName = 'TreeItem'

const TreeNode = ({
    item,
    handleSelectChange,
    handleHoverChange,
    expandedItemIds,
    setExpandedItemIds,
    selectedItemId,
    defaultNodeIcon,
    defaultLeafIcon,
    handleDragStart,
    handleDrop,
    draggedItem,
}: {
    item: TreeDataItem
    handleSelectChange: (item: TreeDataItem | undefined) => void
    handleHoverChange: (item: TreeDataItem | undefined) => void
    expandedItemIds: string[]
    setExpandedItemIds: React.Dispatch<React.SetStateAction<string[]>>
    selectedItemId?: string
    defaultNodeIcon?: any
    defaultLeafIcon?: any
    handleDragStart?: (item: TreeDataItem) => void
    handleDrop?: (item: TreeDataItem) => void
    draggedItem: TreeDataItem | null
}) => {
    const [isDragOver, setIsDragOver] = React.useState(false)
    
    const isExpanded = expandedItemIds.includes(item.id)
    const value = isExpanded ? [item.id] : []

    // 分离展开/收起逻辑
    const handleToggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation() // 阻止冒泡
        setExpandedItemIds(prev => {
            const newExpanded = new Set(prev)
            if (isExpanded) {
                newExpanded.delete(item.id)
            } else {
                newExpanded.add(item.id)
            }
            return Array.from(newExpanded)
        })
    }

    // 节点选中逻辑
    const handleNodeSelect = () => {
        handleSelectChange(item)
        item.onClick?.()
    }

    const onDragStart = (e: React.DragEvent) => {
        if (!item.draggable) {
            e.preventDefault()
            return
        }
        e.dataTransfer.setData('text/plain', item.id)
        handleDragStart?.(item)
    }

    const onDragOver = (e: React.DragEvent) => {
        if (item.droppable !== false && draggedItem && draggedItem.id !== item.id) {
            e.preventDefault()
            setIsDragOver(true)
        }
    }

    const onDragLeave = () => {
        setIsDragOver(false)
    }

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
        handleDrop?.(item)
    }

    return (
        <AccordionPrimitive.Root
            type="multiple"
            value={value}
        >
            <AccordionPrimitive.Item value={item.id}>
                {/* 修改为自定义的节点结构 */}
                <div 
                    className={cn(
                        'ml-2 flex flex-1 w-full items-center transition-all relative',
                        treeVariants(),
                        selectedItemId === item.id && selectedTreeVariants(),
                        isDragOver && dragOverVariants()
                    )}
                    draggable={!!item.draggable}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    {/* 箭头按钮 - 只负责展开/收起 */}
                    <button
                        onClick={handleToggleExpand}
                        className="p-1 hover:bg-accent/50 rounded transition-colors flex items-center justify-center"
                    >
                        <ChevronRight 
                            className={cn(
                                "h-4 w-4 shrink-0 transition-transform duration-200 text-accent-foreground/50",
                                isExpanded && "rotate-90"
                            )} 
                        />
                    </button>
                    
                    {/* 节点内容 - 负责选中 */}
                    <div 
                        className="flex-1 flex items-center py-1 px-1 hover:bg-accent/30 rounded transition-colors cursor-pointer"
                        onClick={handleNodeSelect}
                        onMouseEnter={() => handleHoverChange?.(item)}
                        onMouseLeave={() => handleHoverChange?.(undefined)}
                    >
                        <TreeIcon
                            item={item}
                            isSelected={selectedItemId === item.id}
                            isOpen={isExpanded}
                            default={defaultNodeIcon}
                        />
                        <span className="text-sm truncate">{item.name}</span>
                    </div>
                    
                    {/* Actions */}
                    <TreeActions isSelected={selectedItemId === item.id}>
                        {item.actions}
                    </TreeActions>
                </div>
                
                <AccordionPrimitive.Content 
                    className={cn(
                        'overflow-hidden text-sm transition-all',
                        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
                    )}
                >
                    <div className="pl-1 border-l">
                        <TreeItem
                            data={item.children ? item.children : item}
                            selectedItemId={selectedItemId}
                            handleSelectChange={handleSelectChange}
                            handleHoverChange={handleHoverChange}
                            expandedItemIds={expandedItemIds}
                            setExpandedItemIds={setExpandedItemIds}
                            defaultLeafIcon={defaultLeafIcon}
                            defaultNodeIcon={defaultNodeIcon}
                            handleDragStart={handleDragStart}
                            handleDrop={handleDrop}
                            draggedItem={draggedItem}
                        />
                    </div>
                </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
    )
}

const TreeLeaf = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        item: TreeDataItem
        selectedItemId?: string
        handleSelectChange: (item: TreeDataItem | undefined) => void
        handleHoverChange: (item: TreeDataItem | undefined) => void
        defaultLeafIcon?: any
        handleDragStart?: (item: TreeDataItem) => void
        handleDrop?: (item: TreeDataItem) => void
        draggedItem: TreeDataItem | null
    }
>(
    (
        {
            className,
            item,
            selectedItemId,
            handleSelectChange,
            handleHoverChange,
            defaultLeafIcon,
            handleDragStart,
            handleDrop,
            draggedItem,
            ...props
        },
        ref
    ) => {
        const [isDragOver, setIsDragOver] = React.useState(false)

        // 叶子节点选中逻辑
        const handleLeafSelect = () => {
            if (item.disabled) return
            handleSelectChange(item)
            item.onClick?.()
        }

        const onDragStart = (e: React.DragEvent) => {
            if (!item.draggable || item.disabled) {
                e.preventDefault()
                return
            }
            e.dataTransfer.setData('text/plain', item.id)
            handleDragStart?.(item)
        }

        const onDragOver = (e: React.DragEvent) => {
            if (item.droppable !== false && !item.disabled && draggedItem && draggedItem.id !== item.id) {
                e.preventDefault()
                setIsDragOver(true)
            }
        }

        const onDragLeave = () => {
            setIsDragOver(false)
        }

        const onDrop = (e: React.DragEvent) => {
            if (item.disabled) return
            e.preventDefault()
            setIsDragOver(false)
            handleDrop?.(item)
        }

        return (
            <div
                ref={ref}
                className={cn(
                    'ml-5 flex text-left items-center cursor-pointer py-1 px-2 rounded transition-colors hover:bg-accent/30 relative',
                    treeVariants(),
                    className,
                    selectedItemId === item.id && selectedTreeVariants(),
                    isDragOver && dragOverVariants(),
                    item.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
                )}
                onClick={handleLeafSelect} // 直接绑定选中事件
                onMouseEnter={() => handleHoverChange?.(item)}
                onMouseLeave={() => handleHoverChange?.(undefined)}
                draggable={!!item.draggable && !item.disabled}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                {...props}
            >
                <TreeIcon
                    item={item}
                    isSelected={selectedItemId === item.id}
                    default={defaultLeafIcon}
                />
                <span className="flex-grow text-sm truncate">{item.name}</span>
                <TreeActions isSelected={selectedItemId === item.id && !item.disabled}>
                    {item.actions}
                </TreeActions>
            </div>
        )
    }
)
TreeLeaf.displayName = 'TreeLeaf'

const TreeIcon = ({
    item,
    isOpen,
    isSelected,
    default: defaultIcon
}: {
    item: TreeDataItem
    isOpen?: boolean
    isSelected?: boolean
    default?: any
}) => {
    let Icon = defaultIcon
    if (isSelected && item.selectedIcon) {
        Icon = item.selectedIcon
    } else if (isOpen && item.openIcon) {
        Icon = item.openIcon
    } else if (item.icon) {
        Icon = item.icon
    }
    return Icon ? (
        <Icon className="h-4 w-4 shrink-0 mr-2" />
    ) : (
        <></>
    )
}

const TreeActions = ({
    children,
    isSelected
}: {
    children: React.ReactNode
    isSelected: boolean
}) => {
    return (
        <div
            className={cn(
                isSelected ? 'block' : 'hidden',
                'absolute right-3 group-hover:block'
            )}
        >
            {children}
        </div>
    )
}

export { TreeView, type TreeDataItem }
