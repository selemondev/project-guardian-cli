#!/usr/bin/env node
import ora from "ora";
import { renderLicense } from "./utils/renderLicense";
import { renderCodeOfConduct } from "./utils/renderCodeOfConduct";
import { renderContribution } from "./utils/renderContribution";
import { renderGitIgnore } from "./utils/renderGitignore";
import { renderReadme } from "./utils/renderReadme"
import { codeOfConductMarkdownPath, contributionMarkdownPath, gitIgnorePath, licensePath, readmePath } from "./utils/constant"
import fs from 'fs-extra'
import { logger } from "./utils/logger";

async function main() {
    console.log();

    const filesExist = [
        fs.existsSync(contributionMarkdownPath),
        fs.existsSync(codeOfConductMarkdownPath),
        fs.existsSync(readmePath),
        fs.existsSync(licensePath),
        fs.existsSync(gitIgnorePath)
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