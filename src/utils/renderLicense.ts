/* eslint-disable node/prefer-global/process */
import fs from 'fs-extra'
import { readPackageJSON } from 'pkg-types'
import ora from 'ora'
import { logger } from './logger'
import { licensePath } from './constant'

export async function renderLicense() {
  const packageJsonPath = `${process.cwd()}/package.json`
  const packageJson = await readPackageJSON(packageJsonPath)
  const licenseData = `
MIT License

Copyright (c) ${packageJson.author ? packageJson.author : ''}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`

  const spinner = ora()
  try {
    if (fs.existsSync(licensePath)) {
      return
    }
    else {
      fs.writeFile(licensePath, licenseData, (err: unknown) => {
        if (err) {
          if (err instanceof Error) {
            logger.error(err.message)
            spinner.fail('Failed to write LICENSE template.')
          }
        }
      })
      spinner.succeed('LICENSE template added successfully!')
    };
  }
  catch (error) {
    spinner.fail('An unexpected error occurred.')
    logger.error(error)
  }
}
