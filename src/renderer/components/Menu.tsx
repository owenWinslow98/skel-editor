import React, { useCallback, useEffect, useState } from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/renderer/ui/menubar"
import { setSpineAssets } from '../store/globalSlice';
import { setCurrentFilePath } from '../store/globalSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const Menu: React.FC = () => {
    const dispatch = useAppDispatch();
    const { currentSpineAssets } = useAppSelector(state => state.global);
    const handleMinimize = () => {
        window.electronAPI.minimize();
    };
    const [isMaximized, setIsMaximized] = useState(false);
    const toggleMaximize = () => {
        window.electronAPI.maximize();
    };

    const handleClose = () => {
        window.electronAPI.close();
    };

    const handleOpenFile = async () => {
        const fileData = await window.electronAPI.openFile();
        if (fileData) {

            const { skelFile, atlasFile, textureFiles, fileVersion } = fileData
            // 将数据转换为 blob URL
            const skelRawData = new Uint8Array(skelFile.data)
            const skelBlobUrl = skelFile ? URL.createObjectURL(
                new Blob([skelRawData])
            ) : null;


            const atlasBlobUrl = atlasFile ? URL.createObjectURL(
                new Blob([new Uint8Array(atlasFile.data)], { type: 'text/plain' })
            ) : null;

            const textureList = textureFiles ? textureFiles.map(file => {
                return {
                    ...file,
                    data: URL.createObjectURL(new Blob([new Uint8Array(file.data)]))
                }
            }) : null
            // 设置 Spine 资源到 Redux store (使用 blob URL)
            dispatch(setSpineAssets({
                skelFile: skelFile ? {
                    ...skelFile,
                    data: skelBlobUrl // 使用 blob URL 替代原始数据
                } : null,
                atlasFile: atlasFile ? {
                    ...atlasFile,
                    data: atlasBlobUrl
                } : null,
                textureFiles: textureList || null,
                fileVersion: fileVersion
            }));

            // 设置当前文件路径
            dispatch(setCurrentFilePath(fileData.skelFile.path));
        }
    };

    useEffect(() => {
        // 监听窗口状态变化
        window.electronAPI.onMaximizeChange((maximized: boolean) => {
            setIsMaximized(maximized);
        });

    }, []);
    return (
        <div className="flex justify-between items-center px-4 select-none drag bg-background">
            {/* 左侧菜单 */}
            <div className="flex gap-5 no-drag">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>File</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={handleOpenFile}>
                                Open File ... <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Edit</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Find</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Search the web</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Find...</MenubarItem>
                                    <MenubarItem>Find Next</MenubarItem>
                                    <MenubarItem>Find Previous</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>Cut</MenubarItem>
                            <MenubarItem>Copy</MenubarItem>
                            <MenubarItem>Paste</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className='text-sm'>
                {`${currentSpineAssets?.skelFile?.name} - ${currentSpineAssets?.fileVersion}`}
            </div>
            {/* 右侧窗口控制按钮 */}
            <div className="flex gap-2 no-drag text-white">
                <div onClick={handleMinimize}>
                    <svg width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 8v1H3V8h11z" /></svg>
                </div>
                <div onClick={toggleMaximize}>
                    {isMaximized ? <svg width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 5v9h9V5H3zm8 8H4V6h7v7z" /><path d="M5 5h1V4h7v7h-1v1h2V3H5v2z" /></svg> : <svg width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z" /></svg>}
                </div>
                <div onClick={handleClose}>
                    <svg viewBox="0 0 16 16" width='16px' height='16px' xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Menu;