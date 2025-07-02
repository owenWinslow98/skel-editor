import React, { useEffect, useMemo, useState } from 'react';
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
import { setSpineAssets, SpineAssets, toggleBlackUISkin } from '../store/globalSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Eclipse, House } from 'lucide-react';
import { isEmpty, isNull, isUndefined } from 'lodash';



interface skin {
    name: string;
    path: string;
    file: Uint8Array;
}
const Menu: React.FC<{ className?: string }> = ({ className }) => {
    const dispatch = useAppDispatch();
    const { currentSpineAssets } = useAppSelector(state => state.global);

    const menuFileName = useMemo(() => {
        if (isNull(currentSpineAssets)) return 'Skel Editor'
        const { skel, json } = currentSpineAssets
        const name = isEmpty(skel.name) ? json.name : skel.name
        return isEmpty(name) ? 'Skel Editor' : name
    }, [currentSpineAssets])

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
        const { ipc } = window.electronAPI;
        try {
            const fileData = await ipc.callMain('open-file') as any;
            if(isUndefined(fileData)) return
            const { skel, json, atlas, skins, skelVersion } = fileData
            const transformSkel = isNull(skel.file) ? null : URL.createObjectURL(new Blob([skel.file], { type: 'application/octet-stream' }))
            const transformJson = isNull(json.file) ? null : URL.createObjectURL(new Blob([json.file], { type: 'application/json' }))
            const transformAtlas = isNull(atlas.file) ? null : URL.createObjectURL(new Blob([atlas.file], { type: 'text/plain' }))
            const transformSkins = skins.map((skin: skin) => {
                const transformSkin = URL.createObjectURL(new Blob([skin.file as Uint8Array], { type: 'image/png' }))
                return {
                    ...skin,
                    file: transformSkin,
                }
            })

            const result: SpineAssets = {
                skel: {
                    file: transformSkel,
                    path: skel.path,
                    name: skel.name,
                },
                atlas: {
                    file: transformAtlas,
                    path: atlas.path,
                    name: atlas.name,
                },
                json: {
                    file: transformJson,
                    path: json.path,
                    name: json.name,
                },
                skins: transformSkins,
                fileVersion: skelVersion,
            }

            dispatch(setSpineAssets(result))
        } catch (error) {
            console.log(error)
        }
    };

    const resetHome = () => {
        dispatch(setSpineAssets(null))
    }
    useEffect(() => {
        // 监听窗口状态变化
        window.electronAPI.onMaximizeChange((maximized: boolean) => {
            setIsMaximized(maximized);
        });

    }, []);
    return (
        <div className={`flex justify-between items-center select-none drag bg-background border-b border-border ${className}`}>
            {/* 左侧菜单 */}
            <div className="flex no-drag">
                <div className='flex px-2 items-center justify-center border-r border-border text-foreground hover:bg-accent cursor-pointer' onClick={resetHome}>
                    <House strokeWidth={1} size={24} className='text-foreground' />
                </div>
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
            <div className='text-sm flex-1 text-center text-foreground'>
                {menuFileName}
            </div>
            {/* UI skin*/}
            <div title="transfer skin" className='relative flex items-center justify-center h-full pr-4 cursor-pointer no-drag group' onClick={() => dispatch(toggleBlackUISkin())}>
                <Eclipse size={24} strokeWidth={1} absoluteStrokeWidth />
            </div>
            {/* 右侧窗口控制按钮 */}
            <div className="flex gap-2 no-drag text-white h-full border-l border-border">
                <div onClick={handleMinimize} className='h-full flex items-center justify-center px-4 hover:bg-accent cursor-pointer text-foreground'>
                    <svg width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 8v1H3V8h11z" /></svg>
                </div>
                <div onClick={toggleMaximize} className='h-full flex items-center justify-center px-4 hover:bg-accent cursor-pointer text-foreground'>
                    {isMaximized ? <svg width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 5v9h9V5H3zm8 8H4V6h7v7z" /><path d="M5 5h1V4h7v7h-1v1h2V3H5v2z" /></svg> : <svg width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z" /></svg>}
                </div>
                <div onClick={handleClose} className='h-full flex items-center justify-center px-4 hover:bg-accent cursor-pointer text-foreground'>
                    <svg viewBox="0 0 16 16" width='16px' height='16px' xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Menu;