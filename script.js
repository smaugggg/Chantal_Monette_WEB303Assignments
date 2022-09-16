/*
	WEB 303 Assignment 1 - jQuery
	Chantal Monette W0800871
*/

$(document).ready(function() {
	$("input").change(function(){
		let $sal = $('input#yearly-salary').val();
		let $per = $('input#percent').val();
		let spend = ($sal * $per / 100).toFixed(2);
		$("span#amount").text('$' + spend);
	});
});
