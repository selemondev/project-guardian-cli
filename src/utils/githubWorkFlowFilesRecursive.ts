import path from 'node:path'
import fs from 'node:fs'

export function getGithubWorkflowFileRecursively(pathe: string) {
  const filePaths: string[] = []
  function traverseDirectory(currentPath: string) {
    const stat = fs.lstatSync(currentPath)
    if (stat.isDirectory()) {
      const directories = fs.readdirSync(currentPath)
      if (directories.length) {
        directories.forEach((dir) => {
          const dirStat = fs.lstatSync(path.join(currentPath, dir))

          if (dirStat.isDirectory())
            traverseDirectory(path.join(currentPath, dir))
          else
            filePaths.push(path.join(currentPath, dir))
        })
      }
    }
  }
  traverseDirectory(pathe)
  return filePaths
}
