import React, { useState } from 'react';
import { TreeView, type TreeDataItem } from '../ui/tree-view';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FileIcon, FolderIcon, ImageIcon, VideoIcon, MusicIcon, FileTextIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ResourcePanelProps {
    className?: string;
}

const ResourcePanel: React.FC<ResourcePanelProps> = ({ className = '' }) => {
    const [selectedItem, setSelectedItem] = useState<TreeDataItem | undefined>();
    const bonesTreeData = useSelector((state: RootState) => state.canvas.bonesTreeData)

    // 处理拖拽
    const handleDocumentDrag = (sourceItem: TreeDataItem, targetItem: TreeDataItem) => {
        console.log('拖拽:', sourceItem.name, '到', targetItem.name);
        // 这里可以实现实际的拖拽逻辑
    };

    return (
        <div className={`w-64 bg-card border-l border-border flex flex-col h-full ${className}`}>
            <div className="flex-1 overflow-hidden">
                <Tabs defaultValue="bones" className="h-full flex flex-col">
                    <TabsList className="w-full border-b border-border">
                        <TabsTrigger value="bones" className="flex-1">Bones</TabsTrigger>
                        <TabsTrigger value="resources" className="flex-1">资源</TabsTrigger>
                        <TabsTrigger value="animation" className="flex-1">动画</TabsTrigger>
                    </TabsList>
                    <TabsContent value="bones" className="flex-1 ">
                        <div className="space-y-2 overflow-auto">
                            <TreeView
                                data={[bonesTreeData]}
                                initialSelectedItemId="0"
                                onSelectChange={(item) => {
                                    setSelectedItem(item)
                                    console.log(item)
                                }}
                                onDocumentDrag={handleDocumentDrag}
                                className="h-full"
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="resources" className="flex-1 overflow-hidden">
                        232
                    </TabsContent>


                    <TabsContent value="animation" className="flex-1 p-4">
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-foreground">动画列表</div>
                            <div className="space-y-1">
                                <div className="p-2 bg-secondary/50 rounded text-sm">idle</div>
                                <div className="p-2 bg-secondary/50 rounded text-sm">walk</div>
                                <div className="p-2 bg-secondary/50 rounded text-sm">run</div>
                                <div className="p-2 bg-secondary/50 rounded text-sm">jump</div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* 底部信息 */}
            <div className="p-4 border-t border-border">
                {selectedItem && (
                    <div className="text-xs text-muted-foreground">
                        选中: {selectedItem.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResourcePanel;