// Check if cookie is already stored for this user to not require new login
if(!Cookies.getJSON('wp_CustomAuth') && !window.location.href.match('signin')){
    window.location.href="/signin";
}