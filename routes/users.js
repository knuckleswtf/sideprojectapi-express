var app = require('express')();
const asyncHandler = require('express-async-handler');
const UserController = require('../controllers/UserController');

/**
 * @group Users
 *
 * View all users
 *
 * [TODO] This endpoint uses a custom Scribe strategy that parses a
 * `@usesPagination` annotation to add some query parameters.
 *
 * The sample response is gotten by Scribe making a test API call (aka "response call").
 *
 * @usesPagination
 */
app.get('/', asyncHandler(UserController.index));

/**
 * @group Users
 *
 * Fetch a user
 *
 * The 404 sample is gotten from a "response file".
 *
 * @responseFile 404 scenario="User not found" storage/responses/not_found.json {"resource": "user"}
 */
app.get('/:id(\\d+)', asyncHandler(UserController.show));

/**
 * @group Users
 *
 * Create a user
 */
app.post('/', asyncHandler(UserController.store));

/**
 * @group Users
 *
 * Authenticate
 *
 * Get a new API token.
 *
 * <aside>Yes, we know you can impersonate any user.🙄</aside>
 *
 * @response {"token": "2|KLDoUXc68Ko0JaFDZoX9qYkUqWglwdGxQsvTGBCg"}
 * @responseField token The new API token. Valid forever.
 */
app.post('/:id(\\d+)/auth', asyncHandler(UserController.authenticate));

module.exports = app;
