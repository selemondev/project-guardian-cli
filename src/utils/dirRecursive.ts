import fs from "node:fs";
import path from "path"

export const getFilesRecursively = (directory: string) => {
    let results: string[] = [];
    const list = fs.readdirSync(directory);

    list.forEach(filename => {
        const fullPath = path.join(directory, filename);
        const stat = fs.lstatSync(fullPath);

        if (stat.isDirectory()) {
            if (stat.isDirectory() && filename === 'node_modules' || filename === 'dist') {
                return;
            } else {
                results = results.concat(getFilesRecursively(fullPath));
                return results
            }
        } else {
            results.push(filename);
        }
    });
    return results.filter(Boolean);
};

export const getFiles = (directory: string) => {
    let results: string[] = [];
    const list = fs.readdirSync(directory);

    list.forEach(filename => {
        return results.push(filename);
    });
    return results.filter(Boolean);
}