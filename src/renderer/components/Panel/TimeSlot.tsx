import React, { useState } from 'react';

interface TimeSlotProps {
    maxValue?: number;
    selectedIndex?: number;
    onSelect?: (index: number) => void;
    height?: number;
    width?: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
    maxValue = 50,
    selectedIndex = 0,
    onSelect,
    height = 300,
    width = 400
}) => {
    const [selected, setSelected] = useState(selectedIndex);

    const handleLineClick = (index: number) => {
        setSelected(index);
        onSelect?.(index);
    };

    const renderScale = () => {
        const scales = [];
        const lineSpacing = width / (maxValue + 1);

        for (let i = 0; i <= maxValue; i++) {
            const x = lineSpacing * (i + 1);
            //   const isSelected = selected === i;

            scales.push(
                <div className='flex flex-col items-center mr-[25px]' key={i}>
                    {/* 数字标签 */}
                    <div
                        className="scale-number"
                    >
                        {i}
                    </div>
                    <div className='flex-1 w-[1px] h-full bg-[#ffffff]'>
                    </div>
                </div>
            );
        }
        return scales;
    };

    return (
        <div className='flex w-full flex-1 overflow-x-auto'>
            <div className='w-64'></div>
            <div className='flex flex-1 w-max'>
                {renderScale()}
            </div>
        </div>
    );
};

export default TimeSlot;
