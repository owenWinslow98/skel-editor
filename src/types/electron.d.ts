interface webUtils {
    getPathForFile(file: File): string;
}

interface RendererProcessIpc {
    callMain: (channel: string, data?: any) => Promise<any>;
    answerMain: (channel: string, callback: (data: any) => void) => void;
}
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
        ipc: RendererProcessIpc;
        webUtils: webUtils;
    }
}