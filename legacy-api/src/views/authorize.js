exports.authorize = function(req, res, app, isError) {
    if(isError) {
        app.isError = isError
    }

    res.render('authorize', app);
};

exports.login = function(req, res, app, isError) {
    if(isError) {
        app.isError = isError
    }

    res.render('login', app);
};