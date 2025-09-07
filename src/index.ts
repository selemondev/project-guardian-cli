#!/usr/bin/env node
/* eslint-disable no-console */
import ora from 'ora'
import fs from 'fs-extra'
import { renderLicense } from './utils/renderLicense'
import { renderCodeOfConduct } from './utils/renderCodeOfConduct'
import { renderContribution } from './utils/renderContribution'
import { renderGitIgnore } from './utils/renderGitignore'
import { renderReadme } from './utils/renderReadme'
import { codeOfConductMarkdownPath, contributionMarkdownPath, gitIgnorePath, githubIssueTemplatePath, githubWorkFlowPath, licensePath, readmePath } from './utils/constant'
import { logger } from './utils/logger'
import { renderGithubActions } from './utils/renderGithubActions'

async function main() {
  console.log()
  const filePaths = [contributionMarkdownPath, codeOfConductMarkdownPath, readmePath, licensePath, gitIgnorePath, githubIssueTemplatePath, githubWorkFlowPath]
  const filesExist = filePaths.map((filePath: string) => fs.existsSync(filePath))

  try {
    if (filesExist.every(Boolean)) {
      logger.error('Templates already exist!')
    }
    else {
      const startTime: number = new Date().getTime()

      await renderContribution()

      await renderCodeOfConduct()

      await renderReadme()

      await renderLicense()

      await renderGitIgnore()

      await renderGithubActions()

      ora().stop()

      const endTime: number = new Date().getTime()

      const usageTime: number = (endTime - startTime) / 1000

      console.log()

      console.log(`🚀 Completed in ${usageTime}s`)
    }
  }
  catch (error) {
    ora().stop()
  }
}
main()
