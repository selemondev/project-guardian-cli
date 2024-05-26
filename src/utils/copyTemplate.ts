/* eslint-disable node/prefer-global/process */
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import ora from 'ora'
import chalk from 'chalk'
import { githubWorkflowPath } from './constant'

export async function copyTemplate(result: string[]) {
  const _filename = fileURLToPath(import.meta.url)
  const _dirname = dirname(_filename)
  const files = ['.github']
  const targetDirectory = path.resolve(_dirname, '../templates')
  const dest = path.resolve(process.cwd())
  const spinner = ora()
  const templates = files.filter(file => !result.includes(file))

  async function copy() {
    try {
      if (!dest)
        return

      if (fs.existsSync(githubWorkflowPath))
        return

      await Promise.all(templates.map(async (file) => {
        const srcPath = path.join(targetDirectory, file)
        const destPath = path.join(dest, file)
        const srcStats = await fs.stat(srcPath)
        if (srcStats.isFile())
          await fs.copy(srcPath, destPath)
        else
          await fs.copy(srcPath, destPath)
      }))
      spinner.succeed('Github workflows template added successfully!')
    }
    catch (error) {
      if (error instanceof Error)
        return spinner.fail(chalk.red(error.message))
    }
  }
  await copy()
}
