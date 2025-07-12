import React, { useState } from 'react';
import { TreeView, type TreeDataItem } from '../ui/tree-view';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FileIcon, FolderIcon, ImageIcon, VideoIcon, MusicIcon, FileTextIcon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import { PageTexturePanel } from '../components/Panel/TexturePanel';
import { AnimationPanel } from '../components/Panel/AnimationPanel';
import { KeepAliveTabsContent } from '../ui/keep-alive-tab-content';
import { setCurrentAnimation } from '../store/canvasSlice';
import { currentSpineInstanceData } from './Scen/SpineUtil';
import { BonePanel } from '../components/Panel/BonePanel';

interface ResourcePanelProps {
    className?: string;
}

const ResourcePanel: React.FC<ResourcePanelProps> = ({ className = '' }) => {
    const [selectedItem, setSelectedItem] = useState<TreeDataItem | undefined>();
    const { bonesTreeData, currentSpineData, currentAnimation } = useSelector((state: RootState) => state.canvas)
    const { atlas, skel } = currentSpineData
    const dispatch = useDispatch()

    const [tab, setTab] = React.useState("bones")

    const setAnimation = (animation: string) => {
        const { spineInstance } = currentSpineInstanceData
        if(animation === currentAnimation) {
            spineInstance.state.setEmptyAnimation(0)
        } else {
            spineInstance.state.setAnimation(0, animation, true)
        }

        dispatch(setCurrentAnimation(animation === currentAnimation ? null : animation))
    }
    // 处理拖拽
    const handleDocumentDrag = (sourceItem: TreeDataItem, targetItem: TreeDataItem) => {
        console.log('拖拽:', sourceItem.name, '到', targetItem.name);
        // 这里可以实现实际的拖拽逻辑
    };

    return (
        <div className={`bg-card border-l border-b border-border flex flex-col h-full ${className}`}>
            <Tabs defaultValue="bones" onValueChange={setTab} className='h-full'>
                <TabsList className="w-full border-b border-border">
                    <TabsTrigger value="bones" className="flex-1">Bone</TabsTrigger>
                    <TabsTrigger value="attachments" className="flex-1">Attachment</TabsTrigger>
                    <TabsTrigger value="animation" className="flex-1">Animation</TabsTrigger>
                    <TabsTrigger value="texture" className="flex-1">Texture</TabsTrigger>
                    <TabsTrigger value="skin" className="flex-1">Skin</TabsTrigger>
                </TabsList>
                <KeepAliveTabsContent value="bones" activeValue={tab} className="flex-1 h-full">
                    <BonePanel bonesTreeData={bonesTreeData} onSelectChange={setSelectedItem} handleDocumentDrag={handleDocumentDrag} />
                </KeepAliveTabsContent>
                <KeepAliveTabsContent value="resources" activeValue={tab} className="flex-1 overflow-hidden">
                    213123
                </KeepAliveTabsContent>
                <KeepAliveTabsContent value="animation" activeValue={tab} className="h-full px-2 ">
                    <AnimationPanel animationList={skel?.animations} setAnimation={setAnimation} currentAnimation={currentAnimation} />
                </KeepAliveTabsContent>

                <KeepAliveTabsContent value="texture" activeValue={tab} className='h-full'>
                    <PageTexturePanel pageAtlas={atlas} className='h-[calc(100%-2.25rem)]' />
                </KeepAliveTabsContent>
                <KeepAliveTabsContent value="skin" activeValue={tab} className='h-full'>
                    skin
                </KeepAliveTabsContent>
            </Tabs>
        </div>
    );
};

export default ResourcePanel;