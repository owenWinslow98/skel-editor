import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import TimeSlotExample from '../components/Panel/TimeSlotExample';

const TimePanel: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const timePanelRef = useRef<HTMLDivElement>(null);

    const [timePanelWidth, setTimePanelWidth] = useState(768);
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };




    return (
        <div className="bg-card h-64 flex items-center justify-center border-t border-border w-full">
            <TimeSlotExample />
        </div>
    );
};

export default TimePanel;