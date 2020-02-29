// JavaScript Document
$(function() {
	
	$(document).ready(function(e) {
        
		$('#abouts').slideUp("fast");
		$('#crews').slideUp("fast");
		
		//$('#page-footer > div').autoHeight();
		$('#foot-left, #foot-right').autoHeight();
		
    });
	$('.bt1').css({cursor:'pointer'}).click(function() {
		$('#abouts').slideToggle("slow");
		$('#crews').slideUp("fast");
	});
		
	$('.bt2').css({cursor:'pointer'}).click(function() {
		$('#crews').slideToggle("slow");
		$('#abouts').slideUp("fast");
	});
	
});