import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';

module.exports = function () {
    const app = express();

    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'));
    }
    else {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
       extended: true
    }));

    app.use(bodyParser.json());
    require('../app/routes/index.route')(app);
    require('../app/routes/user.route')(app);
    return app;
}
