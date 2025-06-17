interface Window {
    electronAPI: {
        minimize: () => void;
        maximize: () => void;
        close: () => void;
        onMaximizeChange: (callback: (maximized: boolean) => void) => void;
        openFile: () => Promise<{
            skelFile: {
                name: string;
                data: Array<number>;
                path: string;
            };
            atlasFile: {
                name: string;
                data: Array<number>;
                path: string;
            };
            textureFiles: {
                name: string;
                data: Array<number>;
                path: string;
            }[];
            fileVersion: string;
        } | null>;
    }
}