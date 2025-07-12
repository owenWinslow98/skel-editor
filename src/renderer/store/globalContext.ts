import React, { createContext, useContext, useRef, ReactNode } from 'react'
import { TreeViewRef } from '../ui/tree-view'

interface GlobalContextType {
    treeViewRef: React.RefObject<TreeViewRef>
    // 可以添加其他全局状态
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

interface GlobalProviderProps {
    children: ReactNode
}

let globalTreeViewRef: React.RefObject<TreeViewRef> | null = null

export const setGlobalTreeViewRef = (ref: React.RefObject<TreeViewRef>) => {
    globalTreeViewRef = ref
}

export const getGlobalTreeViewRef = () => {
    return globalTreeViewRef
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const treeViewRef = useRef<TreeViewRef>(null)
    
    const contextValue: GlobalContextType = {
        treeViewRef,
        // 其他全局状态可以在这里初始化
    }
    
    React.useEffect(() => {
        setGlobalTreeViewRef(treeViewRef)
    }, [])

    return React.createElement(
        GlobalContext.Provider,
        { value: contextValue },
        children
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }
    return context
}

// 导出类型和context
export type { GlobalContextType }
export { GlobalContext }
