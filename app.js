var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var express = require('express');
var app = express();
app.use(cors())
app.use(express.json())

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
app.get('/api/healthcheck/:unnecessaryParam?', (req, res) => {
    return res.json({
        "status": "up",
        "services": {
            "database": "up",
            "redis": "up"
        }
    });
});

/**
 * Nested fields
 *
 * @group Dummy endpoints
 * @bodyParam {object} data required The data
 * @bodyParam {string} data.name required A string field.
 * @bodyParam {int} data.size A number. Example: 5
 * @bodyParam {string[]} data.things An array of strings
 * @bodyParam {object[]} data.objects An array of objects
 * @bodyParam {string} data.objects[].a A field in the array of objects
 * @bodyParam {string} data.objects[].b A field in the array of objects
 */
app.post('/nested', function (req, res) {
    return res.json(req.body);
});

/**
 * Body content array
 *
 * @group Dummy endpoints
 * @bodyParam {object[]} [] List of items
 * @bodyParam {string} [].row_id A unique ID. Example: 700
 * @bodyParam {string} [].name required An element name. Example: My item name
 */
app.post('/array-body', (req, res) => {
    return res.json(req.body);
});

/**
 * File input
 *
 * @group Dummy endpoints
 * @bodyParam {file} the_file required Just a file.
 * @bodyParam {object} nested required
 * @bodyParam {string} nested._string required A nested string.
 * @bodyParam {file} nested._file required A nested file.
 */
app.post('/file-input', (req, res) => {
    return res.json(req.body);
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// These routes create a new express.Router() instance 👇

var sideProjectsRouter = require('./routes/sideProjects');
app.use('/sideProjects', sideProjectsRouter);

// These routes create a new express instance 👇

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);



module.exports = app;
