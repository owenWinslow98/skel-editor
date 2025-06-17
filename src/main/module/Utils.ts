
export function readVersionFromSkel(fileBuffer: NonSharedBuffer) {
    function readVarInt(buf: NonSharedBuffer, offset: number): { value: number, nextOffset: number } {
        let b: number, result = 0, shift = 0;
        do {
            b = buf[offset++];
            result |= (b & 0x7F) << shift;
            shift += 7;
        } while (b & 0x80);
        return { value: result, nextOffset: offset };
    }
    function extractVersion(raw: string): string | null {
        const match = raw.match(/\d+\.\d+/);
        return match ? match[0] : null;
    }
    function readString(buf: NonSharedBuffer, offset: number): { value: string | null, nextOffset: number } {
        const { value: length, nextOffset } = readVarInt(buf, offset);
        if (length === 0) return { value: null, nextOffset };

        const endOffset = nextOffset + length - 1; // -1 是因为 Spine 字符串以 null terminator 结尾
        const str = buf.toString('utf8', nextOffset, endOffset);
        return { value: str, nextOffset: endOffset };
    }
    // 第二个字符串：version
    const versionAndHash = readString(fileBuffer, 0);
    const version = extractVersion(versionAndHash.value)
    return version;
}