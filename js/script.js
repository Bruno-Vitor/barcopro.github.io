$(function () {
    // ABRE E FECHA MENU
    $('.nav-toggle, .nav-close').click(function (e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    });

    // FIXAR HEADER
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });

    /* SCROLL SUAVE */
$('nav a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    console.log(menuHeight);

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 1000);
});
});