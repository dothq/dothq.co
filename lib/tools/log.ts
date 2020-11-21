import { api } from "../../src"

import chalk from "chalk"

import config from "../../dot.config"

const genColouredCtx = (ctx: string) => {
    const locale = {
        info: 'log_ctx_info',
        warning: 'log_ctx_warning',
        error: 'log_ctx_error',
        success: 'log_ctx_success',
        debug: 'log_ctx_debug'
    }

    return chalk.bold[config.log[ctx]](api.locales['en-US'][locale[ctx]])
}

export const log = (ctx: 'info' | 'warning' | 'error' | 'success' | 'debug', ...payload: any[]) => {
    console.log(`${genColouredCtx(ctx)}`, ...payload)
    if(ctx == "error") return process.exit(-1);
}