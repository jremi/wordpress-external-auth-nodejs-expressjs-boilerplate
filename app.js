var express = require('express'),   
    app = express(),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    app_userValidate = require('./libs/app_userValidate.js'),
    app_userAuth = require('./libs/app_userAuth.js'),
    app_userHome = require('./libs/app_userHome.js');
  
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
 

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/signin', function (req, res) {
    res.render('signin');
});
 
app.listen(3000);

// Custom API -- Validate the Wordpress user account 

app.post('/user/auth', function (req, res) {
    app_userAuth(req.body, function(authError,authSuccess) {
        if(!authError) {
            res.json(authSuccess);
        }
        else {
            res.json(authError);
        }
    });
});

app.get('/user/home', app_userValidate, function (req, res) {
    app_userHome(req.headers.authorization, function(homeError, homeSuccess){
        res.json({
            success: true,
            status: 200
        });
    });
});

/*
    We can run the req.headers.authorization token thru a validation check
    If vaidation OK , the API will return the results.
    If validation FAIL, the user will need to re-auth with /user/auth and then send a new token and re-try
*/