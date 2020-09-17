const httpErrors = {
    200: {
        ok: true,
        i18n_id: "error_200"
    },
    404: {
        ok: false,
        i18n_id: "error_404"
    }
}

const specialErrors = {
    4009: {
        ok: false,
        i18n_id: "error_4009",
        code: 400
    },
    4010: {
        ok: false,
        i18n_id: "error_4010",
        code: 400
    },
    4011: {
        ok: false,
        i18n_id: "error_4011",
        code: 400
    },
    4050: {
        ok: false,
        i18n_id: "error_4050",
        code: 404
    }
}

export const errors = { ...httpErrors, ...specialErrors };