import React from 'react';
import Coord from './Coord';
export interface PanelProps {
    className?: string;
}

export const Panel: React.FC<PanelProps> = ({ className }) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10 pointer-events-none flex justify-center items-end'>
            <div className='w-64 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full'>
                <div className=''>左侧面板内容</div>
            </div>

            {/* <div className='flex-1 bg-card text-card-foreground'>中间内容区域</div> */}
            <Coord className='flex-1 bg-card text-card-foreground' />

            <div className='w-48 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full'>
                <div className=''>右侧面板内容</div>
            </div>
        </div>
    );
};

export default Panel;