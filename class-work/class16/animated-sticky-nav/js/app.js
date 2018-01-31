$(document).ready(function () {

$(window).scroll(function(){
    console.log($(window).scrollTop());

    if ($(window).scrollTop()>40){
        $('header').addClass('small-nav');
    } else {
        $('header').removeClass('small-nav');
    }
});

})
