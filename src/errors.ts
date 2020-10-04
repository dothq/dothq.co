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
    4004: {
        ok: false,
        i18n_id: "error_4004",
        code: 401
    },
    4005: {
        ok: false,
        i18n_id: "error_4005",
        code: 400
    },
    4006: {
        ok: false,
        i18n_id: "error_4006",
        code: 400
    },
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
    4012: {
        ok: false,
        i18n_id: "error_4012",
        code: 400
    },
    4013: {
        ok: false,
        i18n_id: "error_4013",
        code: 400
    },
    4014: {
        ok: false,
        i18n_id: "error_4014",
        code: 400
    },
    4050: {
        ok: false,
        i18n_id: "error_4050",
        code: 404
    }
}

export const errors = { ...httpErrors, ...specialErrors };