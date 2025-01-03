/* eslint-disable node/prefer-global/process */
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import ora from 'ora'
import chalk from 'chalk'

export async function copyTemplate(templates: string[]) {
  const _filename = fileURLToPath(import.meta.url)
  const _dirname = dirname(_filename)
  const targetDirectory = path.resolve(_dirname, '../templates')
  const dest = path.resolve(process.cwd())
  const spinner = ora()

  async function copy() {
    try {
      if (!dest)
        return
      await Promise.all(templates.map(async (file) => {
        const srcPath = path.resolve(path.join(targetDirectory, file))
        const destPath = path.resolve(path.join(dest, file))
        await fs.copy(srcPath, destPath)
      }))
    }
    catch (error) {
      if (error instanceof Error)
        return spinner.fail(chalk.red(error.message))
    }
  }
  await copy()
}
