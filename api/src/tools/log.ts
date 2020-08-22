import { api } from ".."

import * as chalk from "chalk"

import { LOG_CTX_COLOURS } from "../config"

const genColouredCtx = (ctx: string) => {
    const locale = {
        info: 'logCtxInfo',
        warning: 'logCtxWarning',
        error: 'logCtxError',
        success: 'logCtxSuccess',
        debug: 'logCtxDebug'
    }

    return chalk.bold[LOG_CTX_COLOURS[ctx]](api.locales['en-US'][locale[ctx]])
}

export const log = (ctx: 'info' | 'warning' | 'error' | 'success' | 'debug', ...payload: any[]) => {
    console.log(`${genColouredCtx(ctx)}`, ...payload)
    if(ctx == "error") return process.exit(-1);
}