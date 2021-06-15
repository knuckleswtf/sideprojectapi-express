var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('@knuckleswtf/scribe-express')();
var express = require('express');
var app = express();

// These routes use the main app instance 👇

/**
 * Healthcheck
 *
 * Check that the service is up. If everything is okay, you'll get a 200 OK response.
 *
 * Otherwise, the request will fail with a 400 error, and a response listing the failed services.
 *
 * @response status=400 scenario="Service is unhealthy" {"status": "down", "services": {"database": "up", "redis": "down"}}
 * @responseField status The status of this API (`up` or `down`).
 * @responseField services Map of each downstream service and their status (`up` or `down`).
 */
app.get('/api/healthcheck', (req, res) => {
    return res.json({
        "status": "up",
        "services": {
            "database": "up",
            "redis": "up"
        }
    });
});


/**
 * Body content array
 *
 * @group Dummy endpoints
 * @bodyParam {string} [].row_id A unique ID. Example: 700
 * @bodyParam {string} [].name required An element name. Example: My item name
 * @bodyParam {string} [].description An optional description of the element.
 */
app.post('/array-body', (req, res) => {
    return res.json({});
});

/**
 * File input
 *
 * @group Dummy endpoints
 * @bodyParam {file[]} [] required List of files.
 */
app.post('/file-input', (req, res) => {
    return res.json({});
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// These routes create a new express.Router() instance 👇

var indexRouter = require('./routes/index');
app.use('/', indexRouter);


// These routes create a new express instance 👇

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

module.exports = app;
