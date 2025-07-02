import * as React from "react"
import { ScrollArea } from "@/renderer/ui/scroll-area"
import { Separator } from "@/renderer/ui/separator"
import { isEmpty } from 'lodash'
import { Eye } from "lucide-react"
import { useCallback } from "react"
interface Animation {
    name: string
}

interface AnimationPanelProps {
    animationList?: Animation[]
    className?: string
    setAnimation: (animation: string | null) => void
    currentAnimation: string | null
}

export const AnimationPanel: React.FC<AnimationPanelProps> = ({ animationList, className, setAnimation, currentAnimation }) => {
    // 处理空状态
    if (isEmpty(animationList)) {
        return (
            <div className="h-full flex items-center justify-center text-gray-500">
                No Data
            </div>
        )
    }

    const selectedStyle = useCallback((animation: string) => {
        return currentAnimation === animation ? 'bg-muted/50 font-bold' : ''
    }, [currentAnimation])
    return (
        <ScrollArea className={`h-full w-full ${className}`}>
            <div>
                {animationList.map((animation, index) => (
                    <React.Fragment key={animation.name}>
                        <div className={`text-sm p-2 hover:bg-muted/50 rounded cursor-pointer flex items-center justify-between ${selectedStyle(animation.name)}`} onClick={() => setAnimation(animation.name)}>
                            <div>{animation.name}</div> {currentAnimation === animation.name && <Eye className="w-4 h-4" />}
                        </div>
                        {index < animationList.length - 1 && <Separator />}
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}