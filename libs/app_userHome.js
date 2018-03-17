var appConfig = require('../config.json'),
    axios = require('axios');

module.exports = function(authBearerToken,cb) {
    cb(null,null);
    // axios.post(appConfig.wordpress.rest_endpoint + 'posts', {
    //     "title": "test",
    //     "content": "my test content",
    //     "status": "publish"
    // }, {
    //     "headers": {
    //         'Authorization': authBearerToken
    //     }
    // })
    // .then(function (response) {
    //     console.log(response);
    //     cb(null, response);
    // })
    // .catch(function (error) {
    //     console.log(error.response.data);
    //     cb(error, null);
    // });
}