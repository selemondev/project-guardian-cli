import fs from 'fs-extra'
import { readPackageJSON } from 'pkg-types'
import ora from 'ora'
import { logger } from './logger'
import { codeOfConductMarkdownPath } from './constant'

export async function renderCodeOfConduct() {
  // eslint-disable-next-line node/prefer-global/process
  const packageJsonPath = `${process.cwd()}/package.json`
  const packageJson = await readPackageJSON(packageJsonPath)
  const codeOfConductMarkdownData = `
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, race, body size, disability, ethnicity, sex characteristics, and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

## Scope

This Code of Conduct applies within all project spaces, and it also applies when an individual is representing the project or its community in public spaces. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the owner ${packageJson.author ? packageJson.author : ''}. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org), version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

For answers to common questions about this code of conduct, see https://www.contributor-covenant.org/faq`

  const spinner = ora()
  try {
    if (fs.existsSync(codeOfConductMarkdownPath)) {
      return
    }
    else {
      fs.writeFile(codeOfConductMarkdownPath, codeOfConductMarkdownData, (err: unknown) => {
        if (err) {
          if (err instanceof Error) {
            logger.error(err.message)
            spinner.fail('Failed to write Code Of Conduct template.')
          }
        }
      })
      spinner.succeed('Code Of Conduct template added successfully!')
    };
  }
  catch (error) {
    spinner.fail('An unexpected error occurred.')
    logger.error(error)
  }
}
