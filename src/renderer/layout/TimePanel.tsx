import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const TimePanel: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-card h-64 flex items-center justify-center border-t border-border">
            <button 
                onClick={handlePlayPause}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
                {isPlaying ? (
                    <Pause size={20} />
                ) : (
                    <Play size={20} />
                )}
            </button>
        </div>
    );
};

export default TimePanel;