$(function() {
	
	$(document).ready(function() {
		$('.cleaningser > div').autoHeight();
		$('#descs').slideUp("fast");
	});
	$('#descriptor').css({cursor:'pointer'}).click(function() {
		$('#descs').slideToggle("slow");
	});
	
});