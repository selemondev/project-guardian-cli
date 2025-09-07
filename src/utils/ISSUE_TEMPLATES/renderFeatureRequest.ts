import fs from 'fs-extra'
import ora from 'ora'
import { logger } from '../logger'
import { featureRequestPath } from '../constant'

export async function renderFeatureRequest() {
  const featureRequestMarkdownData = `---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
`

  const spinner = ora()
  try {
    if (fs.existsSync(featureRequestPath)) {
      return
    }
    else {
      fs.writeFile(featureRequestPath, featureRequestMarkdownData, (err: unknown) => {
        if (err) {
          if (err instanceof Error) {
            logger.error(err.message)
            spinner.fail('Failed to write Feature Request template.')
          }
        }
      })
      spinner.succeed('Feature Request template added successfully!')
    };
  }
  catch (error) {
    spinner.fail('An unexpected error occurred.')
    logger.error(error)
  }
}
