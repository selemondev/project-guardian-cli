/* eslint-disable node/prefer-global/process */
import path from 'node:path'
import ora from 'ora'
import chalk from 'chalk'
import { ISSUE_TEMPLATE_PATH, WORKFLOW_PATH } from './constant'
import { dirExists } from './dirExists'

export async function renderGithubActions() {
  const dest = path.resolve(process.cwd())
  const githubDir = path.resolve(path.join(dest, '.github'))
  const githubIssueTemplateDir = path.resolve(path.join(githubDir, 'ISSUE_TEMPLATE'))
  const githubWorkFlowDir = path.resolve(path.join(githubDir, 'workflows'))
  const spinner = ora()

  try {
    await dirExists(
      githubDir,
      'GitHub Templates',
      [],
    )
    await dirExists(
      githubIssueTemplateDir,
      'GitHub Issue Templates',
      ISSUE_TEMPLATE_PATH,
    )

    await dirExists(
      githubWorkFlowDir,
      'GitHub Workflows',
      WORKFLOW_PATH,
    )
  }
  catch (error) {
    if (error instanceof Error)
      spinner.fail(chalk.red(error.message))
    throw error
  }
}
