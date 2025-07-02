import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { isEmpty } from 'lodash'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/renderer/ui/hover-card"
import { Button } from '@/renderer/ui/button'
import { Plus } from 'lucide-react'
// import { Separator } from '@/renderer/ui/separator'
interface RegionImg {
    name: string
    imgBase64: string,
    width: number,
    height: number
}

interface PageAtlas {
    name: string
    regionsImgs: RegionImg[]
}

interface PageTexturePanelProps {
    pageAtlas?: PageAtlas[]
    className?: string
}

export const PageTexturePanel: React.FC<PageTexturePanelProps> = ({ pageAtlas, className }) => {
    const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set())

    const togglePage = (pageName: string) => {
        setExpandedPages(prev => {
            const newSet = new Set(prev)
            if (newSet.has(pageName)) {
                newSet.delete(pageName)
            } else {
                newSet.add(pageName)
            }
            return newSet
        })
    }

    // 处理空状态
    if (isEmpty(pageAtlas)) {
        return (
            <div className="h-full flex items-center justify-center text-gray-500">
                No Data
            </div>
        )
    }

    return (
        <div className={`bg-card flex flex-col ${className}`}>
            <div className="flex-1 overflow-auto">
                {pageAtlas.map((page, index) => (
                    <div key={page.name}>
                        {/* 页面标题 - 支持吸顶 */}
                        <div
                            className="sticky text-foreground top-0 bg-card border-b border-border p-4 cursor-pointer hover:bg-muted/50 flex items-center z-10"
                            onClick={() => togglePage(page.name)}
                        >
                            {expandedPages.has(page.name) ? (
                                <ChevronDown className="w-4 h-4 mr-2" />
                            ) : (
                                <ChevronRight className="w-4 h-4 mr-2" />
                            )}
                            <span className="font-medium">{page.name}</span>
                            <span className="ml-auto text-sm text-gray-500">
                                ({page.regionsImgs.length} items)
                            </span>
                        </div>

                        {/* 区域列表 */}
                        {expandedPages.has(page.name) && (
                            <div className="p-2 space-y-1">
                                {page.regionsImgs.map((region, regionIndex) => (
                                    <HoverCard key={`${page.name}-${region.name}`} openDelay={500}>
                                        <HoverCardTrigger asChild>
                                            <div className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                                                <img
                                                    src={region.imgBase64}
                                                    className="w-6 h-6 object-contain mr-3"
                                                    alt={region.name}
                                                />
                                                <span className="text-sm">{region.name}</span>
                                            </div>
                                        </HoverCardTrigger>
                                        <HoverCardContent side="right" className="w-auto">
                                            <div className="flex flex-col items-end">
                                                <img
                                                    src={region.imgBase64}
                                                    className="max-w-32 max-h-32 object-contain mb-2"
                                                    alt={region.name}
                                                />
                                                <span className="text-sm font-medium">{`${region.width}x${region.height}`}</span>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className='flex items-center justify-center my-6'><Button><Plus className='w-4 h-4 mr-2' /> Import Texture</Button></div>
            </div>
        </div>
    )
}