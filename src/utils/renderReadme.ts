/* eslint-disable node/prefer-global/process */
import fs from 'fs-extra'
import { readPackageJSON } from 'pkg-types'
import ora from 'ora'
import { logger } from './logger'
import { readmePath } from './constant'

export async function renderReadme() {
  const packageJsonPath = `${process.cwd()}/package.json`
  const packageJson = await readPackageJSON(packageJsonPath)
  const readmeMarkdownData = `
 <p align="center">
<img align="center" src="https://raw.githubusercontent.com/${packageJson.author ? packageJson.author : 'username'}/${packageJson.name}/master/assets/logo/icon.svg" />
<h1 align="center">
${packageJson.name ? packageJson.name.charAt(0).toUpperCase() + packageJson.name.slice(1) : ''}
</h1>
</p>
`

  const spinner = ora()
  try {
    if (fs.existsSync(readmePath)) {
      return
    }
    else {
      fs.writeFile(readmePath, readmeMarkdownData, (err: unknown) => {
        if (err) {
          if (err instanceof Error) {
            logger.error(err.message)
            spinner.fail('Failed to write README template.')
          }
        }
      })
      spinner.succeed('README template added successfully!')
    };
  }
  catch (error) {
    spinner.fail('An unexpected error occurred.')
    logger.error(error)
  }
}
