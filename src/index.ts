#!/usr/bin/env node
import ora from "ora";
import { renderLicense } from "./utils/renderLicense";
import { renderCodeOfConduct } from "./utils/renderCodeOfConduct";
import { renderContribution } from "./utils/renderContribution";
import { renderGitIgnore } from "./utils/renderGitignore";
import { renderReadme } from "./utils/renderReadme"
import { codeOfConductMarkdownPath, contributionMarkdownPath, gitIgnorePath, licensePath, readmePath, githubWorkflowPath } from "./utils/constant"
import fs from 'fs-extra'
import { logger } from "./utils/logger";
import { copyTemplate } from "./utils/copyTemplate";
import path from "node:path";
import { getFiles } from "./utils/dirRecursive";

async function main() {
    console.log();

    const absolutePath = path.resolve();

    const result = getFiles(absolutePath)

    const filesExist = [
        fs.existsSync(contributionMarkdownPath),
        fs.existsSync(codeOfConductMarkdownPath),
        fs.existsSync(readmePath),
        fs.existsSync(licensePath),
        fs.existsSync(gitIgnorePath),
        fs.existsSync(githubWorkflowPath)
    ];

    try {
        if (filesExist.every(Boolean)) {
            logger.error('Templates already exist!')
        } else {

            const startTime: number = new Date().getTime();

            await renderContribution();

            await renderCodeOfConduct();

            await renderReadme()

            await renderLicense();

            await renderGitIgnore();

            await copyTemplate(result);

            ora().stop();

            const endTime: number = new Date().getTime();

            const usageTime: number = (endTime - startTime) / 1000;

            console.log();

            console.log(`🚀 Completed in ${usageTime}s`);
        }
    } catch (error) {
        ora().stop();
    }

}
main();