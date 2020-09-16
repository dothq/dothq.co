const httpErrors = {
    404: {
        ok: false,
        i18n_id: "error_404"
    }
}

const specialErrors = {
    4050: {
        ok: false,
        i18n_id: "error_4050",
        code: 404
    }
}

export const errors = { ...httpErrors, ...specialErrors };