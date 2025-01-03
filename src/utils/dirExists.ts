import ora from 'ora'
import fs from 'fs-extra'
import { copyTemplate } from './copyTemplate'

export async function dirExists(dirPath: string, spinnerMessage: string, copyPath: string | []) {
  const spinner = ora()
  if (await fs.pathExists(dirPath))
    return
  if (typeof copyPath === 'string') {
    await copyTemplate([copyPath])
    spinner.succeed(`✅ ${spinnerMessage} added successfully!`)
  }
  else {
    spinner.succeed(`✅ ${spinnerMessage} added successfully!`)
    await copyTemplate(copyPath)
  }
}
