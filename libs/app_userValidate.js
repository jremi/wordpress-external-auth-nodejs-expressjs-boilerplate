var appConfig = require('../config.json'),
    axios = require('axios');

module.exports = function(req,res,next){
    console.log("WP token validation running...");
    var validateToken = req.headers.authorization;
    console.log(validateToken);
    axios.post(appConfig.wordpress.token_auth_validate_url, {}, {
        "headers": {
            'Authorization': validateToken
        }
    })
    .then(function (response) {
        console.log('Token success: status', response.data.data.status, '(', response.data.code, ')', '\n');
        next();
    })
    .catch(function (error) {
        console.log('Token error: status', error.response.data.data.status, '(', error.response.data.code, ')', '\n');
        res.json({
            success: false, 
            status: error.response.data.data.status
        });
    });
}