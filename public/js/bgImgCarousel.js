var backgroundImageUrl = [
    '/images/background/photo-1483631224226-a219224bb76e.jpeg',
    '/images/background/photo-1518717202715-9fa9d099f58a.jpeg',
    '/images/background/photo-1489769459544-1b2a788df7b6.jpeg',
    '/images/background/photo-1494984858525-798dd0b282f5.jpeg',
    '/images/background/photo-1491904768633-2b7e3e7fede5.jpeg',
    '/images/background/photo-1465588042420-47a53c2d0320.jpeg'
];

function carouselSlideShow(){
    $(document).ready(function(){
        var x = 0;
        setInterval(function() {
            if(x <= backgroundImageUrl.length-1) { 
                $('body').css('background-image','url('+backgroundImageUrl[x]+')');
                x = x + 1;
            }
            else{
                x = 0;
            }
            
        }, 8000);
    });
}

function carouselRandomSelect(){
    $(document).ready(function(){
        var x = Math.floor(Math.random() * Math.floor(backgroundImageUrl.length)),
            selectedImage = backgroundImageUrl[x];
        $('body').css('background-image','url('+selectedImage+')');
    });
}

carouselRandomSelect();