import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url"
import fs from "fs-extra";
import ora from "ora";
import chalk from "chalk";

export const copyTemplate = async (result: string[]) => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);
    const files = ['.gitignore'];
    const targetDirectory = path.resolve(_dirname, '../templates');
    const dest = path.resolve(process.cwd());
    const spinner = ora('Copying template...').start();
    const startTime: number = new Date().getTime();
    const templates = files.filter(file => !result.includes(file));

    async function copy() {
        try {
            if (!dest) {
                return;
            };
            await Promise.all(templates.map(async (file) => {
                const srcPath = path.join(targetDirectory, file);
                const destPath = path.join(dest, file);
                const srcStats = await fs.stat(srcPath);
                if (srcStats.isFile()) {
                    await fs.copy(srcPath, destPath);
                };
            }));
        } catch (error) {
            if(error instanceof Error) {
                return spinner.fail(chalk.red(error.message));
            }
        } finally {
            spinner.stop();
        }
    }
    await copy();

    if(!templates.length) {
        return;
    } else {
        spinner.succeed(chalk.green('Template(s) added successfully!'))
    };

    const endTime: number = new Date().getTime()
    const usageTime: number = (endTime - startTime) / 1000;

    console.log();

    console.log(`🚀 Completed in ${usageTime}s`)
}