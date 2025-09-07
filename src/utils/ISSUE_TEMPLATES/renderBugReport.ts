import fs from 'fs-extra'
import ora from 'ora'
import { logger } from '../logger'
import { bugReportPath } from '../constant'

export async function renderBugReport() {
  const bugReportMarkdownData = `
  ---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
`

  const spinner = ora()
  try {
    if (fs.existsSync(bugReportPath)) {
      return
    }
    else {
      fs.writeFile(bugReportPath, bugReportMarkdownData, (err: unknown) => {
        if (err) {
          if (err instanceof Error) {
            logger.error(err.message)
            spinner.fail('Failed to write Bug Report template.')
          }
        }
      })
      spinner.succeed('Bug Report template added successfully!')
    };
  }
  catch (error) {
    spinner.fail('An unexpected error occurred.')
    logger.error(error)
  }
}
