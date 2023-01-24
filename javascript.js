$(document).ready(function(){
    
    $(".top__more").click(function() {
        $('html, body').animate({
            scrollTop: ($(".top__more").offset().top-100)
        }, 3500);
    });

    var offset = 150;
    $(window).scroll(function(){
        if( $(this).scrollTop() > offset ){
            $('body').addClass('scroll');
        } else {
            $('body').removeClass('scroll');
        }
    });
    
    $(".hamburger-menu").click(function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
    });

});