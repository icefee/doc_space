
export async function loadCode(path: string): Promise<string> {
    const codeString = await import(`../data/code/${path}`)
    return codeString.default as string
}
