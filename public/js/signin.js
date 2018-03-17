function userAuth(input_username, input_password){
    $.ajax({
        type: "POST",
        url: 'http://localhost:3000/user/auth',
        data: {
            username : input_username,
            password: input_password
        },
        success: userAuth_result,
        dataType: 'json'
    });
}

function userAuth_result(res){
    if(res.hasOwnProperty('code')){
        // console.log(res);
        swal({
            type: 'error',
            title: res.code, //'Oops...',
            html: res.message //'Unable to auth with Wordpress server!'
        });
    }
    else{
        // console.log(res);
        Cookies.set('wp_CustomAuth', res, { expires: 90 });
        swal({
            type: 'success',
            title: 'Good job!',
            text: 'External Wordpress Authentication OK!'
        }).then(function() {
            window.location.href="/";
        });;
    }
}

$(document).ready(function(){

    // Notification alerts on signin page
    if(location.search.match('s=1')){
        $('.alert-info').css('visibility','visible').html(
            '<i class="fa fa-key" style="padding-right:3px" aria-hidden="true"></i>' +
            '<strong>You have been signed out</strong> for account security reasons! Please sign in again.'
        );
    }

    // Check if user already signed-in and display message
    if(Cookies.getJSON('wp_CustomAuth')){
        $('#user_display_name').text(Cookies.getJSON('wp_CustomAuth').user_nicename);
        $('.login-title').css('visibility','visible');
        $('.account-wall').css('visibility','hidden');
    }

    $('#signout').click(function(e){
        e.preventDefault();
        Cookies.remove('wp_CustomAuth');
        window.location.href = "/";
    });

    // Setup event click listener for the 'Sign in' button
    $(".form-signin").submit(function(event) {
        event.preventDefault();
        var input_username = $("input:first").val(),
            input_password = $("input:password").val();
        userAuth(input_username, input_password);
    });
});