var appConfig = require('../config.json'),
    axios = require('axios');

module.exports = function(params,cb) {
    axios.post(appConfig.wordpress.token_auth_url, {
        username: params.username,
        password: params.password
    })
    .then(function (response) {
        cb(null, response.data);
    })
    .catch(function (error) {
        cb(error.response.data, null);
    });
}
