import React, { useEffect, useState } from 'react';
import { Container, Text } from 'pixi.js';
import { useSelector } from 'react-redux';
import { RootState } from '@/renderer/store';

export interface CoordProps {
    className?: string;
}

export const Coord: React.FC<CoordProps> = ({ className }) => {

    const { mouseX, mouseY, scale } = useSelector((state: RootState) => state.canvas)
    useEffect(() => {
        // Create container for the coordinate bar

        // Add container to the stage (not the viewport to keep it fixed)

        // Clean up
        return () => {

        };
    }, []);

    // This component doesn't render anything in React
    // It just manages the PixiJS objects
    return (<div className={className}>
        {mouseX}, {mouseY}, {scale}
    </div>);
};

export default Coord;