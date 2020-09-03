const deprecatedRoute = (req, res) => {
    res.status(410);

    res.json({
        route: req.query.route,
        error: `This API has been deprecated and can no longer be used.`,
        code: 410
    })
}

exports.deprecatedRoute = deprecatedRoute;