import chalk from 'chalk';

export const log = (...data: any[]) => console.log(chalk.blueBright.bold("INFO"), ...data);
export const warn = (...data: any[]) => console.log(chalk.yellowBright.bold("WARN"), ...data);
export const error = (...data: any[]) => console.log(chalk.redBright.bold("ERROR"), ...data);