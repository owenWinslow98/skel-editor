import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { TextureAtlas } from "./spine/spine-core/src/TextureAtlas"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getAtlasPngList = (atlasText: string) => {
    const atlas = new TextureAtlas(atlasText)
    return atlas.pages
  }