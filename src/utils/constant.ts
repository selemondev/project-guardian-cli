/* eslint-disable node/prefer-global/process */
import path from 'node:path'

export const contributionMarkdownPath = path.join(process.cwd(), '/CONTRIBUTING.md')
export const codeOfConductMarkdownPath = path.join(process.cwd(), '/CODE_OF_CONDUCT.md')
export const readmePath = path.join(process.cwd(), '/README.md')
export const licensePath = path.join(process.cwd(), '/LICENSE')
export const gitIgnorePath = path.join(process.cwd(), '/.gitignore')
export const bugReportPath = path.join(process.cwd(), '/.github/ISSUE_TEMPLATE/bug_report.md')
export const featureRequestPath = path.join(process.cwd(), '/.github/ISSUE_TEMPLATE/feature_request.md')
export const githubIssueTemplatePath = path.join(process.cwd(), '/.github/ISSUE_TEMPLATE')
export const githubWorkFlowPath = path.join(process.cwd(), '/.github/workflow')
export const ISSUE_TEMPLATE_PATH = '.github/ISSUE_TEMPLATE'
export const WORKFLOW_PATH = '.github/workflows'
