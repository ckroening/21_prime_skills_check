$(document).ready(function(){
	// At page load, add a paragraph that says "Page loaded"
	// to the section element
	$('.primary .status').append('<p>Page Loaded</p>');
	$('.primary').find('.status').append('<p>This also works for stating "Page Loaded."</p>');

	// At page load, add a button with a class of "gotcha" to main element.
 	var gotchaButton = $('<input type="button" value="gotcha" class="gotcha"/>');
        $('.primary').append(gotchaButton);

	$('.gotcha').on('click', function() {
		$('.primary .status').append('<p>I traverse the DOM like a champ</p>');
	});
	// When the button is clicked, update the section element with
	// a paragraph that says "I traverse the DOM like a champ"

	// this code also works:
	//  
	// gotchaButton.on('click', function() {
	//	$('.primary .status').append('<p>I traverse the DOM like a champ</p>');
	//});
//});

	
});