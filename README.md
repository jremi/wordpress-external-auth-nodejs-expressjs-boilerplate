# External Wordpress Authentication boilerplate kit with NodeJS + ExpressJS + Handlebars!

If you have a Wordpress site and are looking to have a basic boilerplate to get started with external authentication using NodeJS + ExpressJS ... look no further! 

Here is a simple /signin page that is used to take the Wordpress **username/password**. 

 You can completely change the design by modifying the **/public/css/app.css**
![](https://i.imgur.com/oIhSHUC.png)

After you are signed in you will see a small dashboard that can be used to perform other tasks that will be up to you to add. However, if the user presses **Sign out** the cookie is destroyed and the user is brought back to the main /signin page.

----------
![](https://i.imgur.com/8HKed97.png)
----------

This boilerplate kit has the following:
- **NodeJS**
- **ExpressJS** 
- **Handlebars** (npm package express-handlebars)

On the client-side I added jQuery, Bootstrap, Fontawesome. They are preloaded inside the **views/layouts/main.handlebars**  head

Your Wordpress installation will need the following **required plugin** installed:
- **[JWT Authentication for WP-API](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)**

For verifying/viewing the REST API calls that this external Wordpress app will make against the JWT Authentication for WP-API + any other Wordpress REST API calls) download and install the following plugin to your Wordpress:

 - **[REST API Log](https://wordpress.org/plugins/wp-rest-api-log/)**

Once these plugins are installed and you have this Express app running you will be able to login via the external sign in page using the Wordpress username/password accounts that have been created inside the Wordpress. Once logged in you will have a dashboard that will display to the user that they are signed in with the external app and they can sign-out.

# How does it work?

When the user enters the Wordpress username/password into the sign in form it will validate thru Express and against the JWT Authentication for WP-API to obtain a token back for this user. Once the token is obtained it will store a Cookie to the users browser. If this token is found it will stay logged in (unless the user signs-out/token is corrupted/ or 90 day cookie expiration elapses).

If the user has a Cookie with the stored token then each time any request is made to the Express it will run thru a small Express middleware function that will then run a request against the JWT Authentication for WP-API to perform a token validation check. If the token is valid it will continue with the API route request. If it is not valid it will return an error and the user will be automatically signed-out and brought back to the main sign-in page to re-login and re-obtain a new fresh token. 

## config.json

The file **config.json** in the root of the repository needs to be configured to match your Wordpress server credentials

Here is an example of this **config.json** file:

	{
		"wordpress": {
			"rest_endpoint" : "http://localhost:8888/wordpress/wp-json/wp/v2/",
			"token_auth_url": "http://localhost:8888/wordpress/wp-json/jwt-auth/v1/token",
			"token_auth_validate_url" : "http://localhost:8888/wordpress/wp-json/jwt-auth/v1/token/validate"
		}
	}

**NOTE** 

Make sure you update the http://localhost:8888/wordpress to match your environment. This is only showing an example.

It should also be noted that in production environment you will want to make sure you are using HTTPS since you will need the user to initially pass the username/password into the sign in page in order to obtain the token and have it stored into the cookie.

----------
## Example of Express middleware Wordpress token validation console logs

![enter image description here](https://i.imgur.com/O0zVeOK.png)

## To get started
Clone the repository, make sure you have the Wordpress plugins installed, and finally make sure your config.json is using the correct Wordpress endpoint urls. 

Then you can run and start Express server on default port 3000 

`$ node app.js`

## Questions
Shoot a message or open an issue. If you like this repo please ⭐ :) 

Pull requests are welcomed. 

If anyone has any code work, hit me up. I can always use some extra bucks. 