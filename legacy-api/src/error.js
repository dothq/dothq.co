const throwError = (code, message, res) => {
    res.status(400)
    res.json({
        ok: code == 2000,
        status: message
    })
}

exports.throwError = throwError;