import React, { useState } from 'react';
import TimeSlot from './TimeSlot';

const TimeSlotExample: React.FC = () => {
    const [selectedTime, setSelectedTime] = useState(0);

    const handleTimeSelect = (index: number) => {
        console.log('Selected time index:', index);
        setSelectedTime(index);
    };

    return (
        <div className='h-full w-full'>
            {/* 自定义范围 */}
            <TimeSlot
                maxValue={20}
                selectedIndex={2}
                onSelect={(index) => console.log('Custom range selected:', index)}
                width={600}
            />
        </div>
    );
};

export default TimeSlotExample; 