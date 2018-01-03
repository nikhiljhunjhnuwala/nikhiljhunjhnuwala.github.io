$(document).ready(function () {

	var lights = 'on';
	var x = 0;

	$('#lightswitch').click(function(){
		x = x + 1;
		if (x>10){
			lights='broken';
		} else if (lights=='on'){
			// $('#lightswitch').css({'background-color':'black','color':'white'});
			$('body').toggleClass('lights-off');
			$('#lightswitch').toggleClass('switch-on').html(`OFF`);
			lights = 'off';
			console.log("on!")
		} else if (lights=='off'){
			// $('#lightswitch').css({'background-color':'white','color':'black'});
			$('#lightswitch').toggleClass('switch-on').html(`ON`);
			$('body').toggleClass('lights-off');
			lights = 'on';
			console.log("off!")
		}

		if (lights=='broken'){
			$('#lightswitch').css({'background-color':'pink','color':'black'});
			$('body').css('background-color','pink');
			$('#lightswitch').html(`BROKEN`);
			console.log("broken!")
		}
	})
})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;