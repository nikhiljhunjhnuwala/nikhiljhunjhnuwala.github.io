$(document).ready(function(){


    $('#click-me').click(calculate);

    function calculate(){
        var age = $('#age').val();
        var maxAge = $('#max-age').val();
        var favoriteDrink = $('#item').val();
        var amount = $('#num-per-day').val();
        var life = (parseInt(maxAge) - parseInt(age)) * 365 * parseInt(amount);
        $('#solution').html(life);
    }

   

})
// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user