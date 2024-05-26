/* eslint-disable no-console */
import chalk from 'chalk'

export const logger = {
  success: (...args: unknown[]) => {
    console.log(chalk.green(...args))
  },

  error: (...args: unknown[]) => {
    console.log(chalk.red(...args))
  },

  info: (...args: unknown[]) => {
    console.log(chalk.cyan(...args))
  },

  warn: (...args: unknown[]) => {
    console.log(chalk.yellow(...args))
  },
}
