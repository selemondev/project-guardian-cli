import fs from 'node:fs'
import path from 'node:path'

export function getFilesRecursively(directory: string) {
  let results: string[] = []
  const list = fs.readdirSync(directory)

  list.forEach((filename) => {
    const fullPath = path.join(directory, filename)
    const stat = fs.lstatSync(fullPath)

    if (stat.isDirectory()) {
      // eslint-disable-next-line style/no-mixed-operators
      if (stat.isDirectory() && filename === 'node_modules' || filename === 'dist') {
        // eslint-disable-next-line no-useless-return
        return
      }
      else {
        results = results.concat(getFilesRecursively(fullPath))
        return results
      }
    }
    else {
      results.push(filename)
    }
  })
  return results.filter(Boolean)
}

export function getFiles(directory: string) {
  const results: string[] = []
  const list = fs.readdirSync(directory)

  list.forEach((filename) => {
    return results.push(filename)
  })
  return results.filter(Boolean)
}
