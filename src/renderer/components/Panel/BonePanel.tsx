// import React from 'react'
import { useGlobalContext } from '@/renderer/store/globalContext'
import { TreeView, TreeViewRef, type TreeDataItem } from '@/renderer/ui/tree-view'
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'
import { setCurrentBone } from '@/renderer/store/canvasSlice'
import { currentDebugRenderer } from '@/renderer/layout/Scen/SpineUtil'
import { Target, Spline } from 'lucide-react'

interface BonePanelProps {
  bonesTreeData: TreeDataItem
  onSelectChange: (item: TreeDataItem | undefined) => void
  handleDocumentDrag: (sourceItem: TreeDataItem, targetItem: TreeDataItem) => void
  className?: string
}

export const BonePanel: React.FC<BonePanelProps> = ({
  bonesTreeData,
  onSelectChange,
  handleDocumentDrag,
  className
}) => {
  const { treeViewRef } = useGlobalContext()
  const dispatch = useDispatch()

  // 处理空状态
  if (!bonesTreeData || isEmpty(bonesTreeData.name)) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        No Data
      </div>
    )
  }

  // 根据bone.length设置图标的递归函数
  const setBoneIcons = (item: TreeDataItem): TreeDataItem => {
    const iconProps = { strokeWidth: 1 }
    const updatedItem = {
      ...item,
      icon: item.length === 0 ? Target : Spline,
      iconProps
    }
    
    if (item.children) {
      updatedItem.children = item.children.map(setBoneIcons)
    }
    
    return updatedItem
  }

  // 为骨骼树数据设置图标
  const bonesTreeDataWithIcons = setBoneIcons(bonesTreeData)

  // 处理节点选中事件
  const handleNodeSelect = (item: TreeDataItem | undefined) => {
    // 调用原有的选中回调
    onSelectChange(item)
    // 更新Redux store中的currentBone
    if (item) {
      // 从节点名称中提取纯骨骼名称（去掉"索引-"前缀）
      const boneName = item.name.includes('-') ? item.name.substring(item.name.indexOf('-') + 1) : item.name
      dispatch(setCurrentBone(boneName))
      
      // 同时调用 debugRenderer 的 selectBone 方法
      if (currentDebugRenderer) {
        currentDebugRenderer.selectBone(boneName)
      }
    } else {
      dispatch(setCurrentBone(null))
      
      // 清除 debugRenderer 的选中状态
      if (currentDebugRenderer) {
        currentDebugRenderer.selectedBone = null
      }
    }
  }

  // 处理节点悬停事件
  const handleNodeHover = (item: TreeDataItem | undefined) => {
    if (currentDebugRenderer) {
      if (item) {
        // 从节点名称中提取纯骨骼名称（去掉"索引-"前缀）
        const boneName = item.name.includes('-') ? item.name.substring(item.name.indexOf('-') + 1) : item.name
        currentDebugRenderer.hoverBone(boneName)
      } else {
        // 清除悬停状态
        currentDebugRenderer.hoveredBone = null
      }
    }
  }

  return (
    <div className={`h-full ${className}`}>
      <div className="space-y-2 overflow-auto h-full">
        <TreeView
          ref={treeViewRef}
          data={[bonesTreeDataWithIcons]}
          initialSelectedItemId="0"
          onSelectChange={handleNodeSelect}
          onHoverChange={handleNodeHover}
          onDocumentDrag={handleDocumentDrag}
          className="h-full"
        />
      </div>
    </div>
  )
}