import Store from 'electron-store';

type StoreType = {
    skelPath: string;
    atlasPath: string;
    pngPath: string;
}
export const store = new Store<StoreType>({
    name: 'spine-editor',
});

export const setSkelPath = (path: string) => {
    store.set('skelPath', path);
}
export const getSkelPath = () => {
    return store.get('skelPath');
}

export const setAtlasPath = (path: string) => {
    store.set('atlasPath', path);
}
export const getAtlasPath = () => {
    return store.get('atlasPath');
}

export const setPngPath = (path: string) => {
    store.set('pngPath', path);
}
export const getPngPath = () => {
    return store.get('pngPath');
} 

