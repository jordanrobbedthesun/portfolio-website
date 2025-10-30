import fs from 'fs'
import path from 'path'

// List image files from a directory under the public folder and return web paths
export function listPublicImages(
    webDir: string,
    exts: string[] = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
): string[] {
    const relative = webDir.startsWith('/') ? webDir.slice(1) : webDir
    const abs = path.join(process.cwd(), 'public', relative)

    let files: string[]
    try {
        files = fs.readdirSync(abs)
    } catch {
        return []
    }

    return files
        .filter((f) => exts.includes(path.extname(f).toLowerCase()))
        .sort()
        .map((f) => `${webDir.replace(/\/$/, '')}/${f}`)
}
