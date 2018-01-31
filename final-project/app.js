$(document).ready(function () {


$('.month').click(selectPlan);

function selectPlan(){
    $('.month').removeClass('selected-plan');
    $('.onePayment').removeClass("is-Hidden");
    $('.free-trial').removeClass("is-Hidden");
    $('.off').empty();
    $('.discount').removeClass('discount-selected');
    $('.month-duration').removeClass('month-duration-selected');

    $(this).addClass('selected-plan');
    $(this).children('.discount').children('.off').text(' off');
    $(this).children('.discount').addClass('discount-selected');
    $(this).children('.month-duration').addClass('month-duration-selected');

    if ($('.mo-1').hasClass('selected-plan')){
        $('#plan-monthly-price').text('$59');
        $('.plan-signup-cta').attr('href','https://ww1.noom.com/purchase/option_d_20161031/#/createAccount/');
        $('.onePayment').addClass("is-Hidden");
        $('.free-trial').addClass("is-Hidden");
        $('#plan-weight-loss-amount').text('3');
    } else if ($('.mo-2').hasClass('selected-plan')){
        $('#plan-monthly-price').text('$49.50');
        $('.plan-signup-cta').attr('href','https://ww1.noom.com/purchase/option_f_20170320/#/createAccount/');
        $('#plan-weight-loss-amount').text('15');
    } else if ($('.mo-4').hasClass('selected-plan')){
        $('#plan-monthly-price').text('$32.25');
        $('.plan-signup-cta').attr('href','https://ww1.noom.com/purchase/option_e_20161031/#/createAccount/');
        $('#plan-weight-loss-amount').text('30');
    } else if ($('.mo-6').hasClass('selected-plan')){
        $('#plan-monthly-price').text('$24.83');
        $('.plan-signup-cta').attr('href','https://ww1.noom.com/purchase/option_g_20170428/#/createAccount/');
        $('#plan-weight-loss-amount').text('45');
    } else if ($('.mo-12').hasClass('selected-plan')){
        $('#plan-monthly-price').text('$16.58');
        $('.plan-signup-cta').attr('href','https://ww1.noom.com/purchase/option_j_20171222/#/createAccount/');
        $('#plan-weight-loss-amount').text('90');
    } 
}







    })