$(document).ready(function(){
    $('#user_display_name').text(Cookies.getJSON('wp_CustomAuth').user_nicename);
    $.ajax({
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.getJSON('wp_CustomAuth').token);
        },
        url: 'http://localhost:3000/user/home',
        data: {},
        success: userData,
        dataType: 'json'
    });
    $('#signout').click(function(e) {
        e.preventDefault();
        flushSession();
    });
});

function userData(res){
    if(res.success) {
        // console.log(res);
    }
    else {
        flushSession(true);
    }
}

function flushSession(isTokenError) {
    Cookies.remove('wp_CustomAuth');
    if(isTokenError) { window.location.href="/signin?s=1"; } // s=1 token failure (alert signin header notification)
    else{ window.location.href = "/signin"; }
}