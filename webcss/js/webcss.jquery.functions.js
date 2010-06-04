$(document).ready(function() {

	function spawn() {
		
		$("head").append("<link href=\"webcss/webcss.css\" rel=\"stylesheet\" type=\"text/css\" />");
		
		$("body").prepend("<div id=\"webcss_console\"></div>");
		$("#webcss_console").append("<div id=\"webcss_console_head\"></div>");
		$("#webcss_console").append("<div id=\"console_container\"><textarea id=\"webcss_textarea\"></textarea></div>");
		
	}
	
	spawn();
	
	$("#webcss_console_head").toggle(function() {
		
		$("#webcss_console").animate({
			height: 400
		}, "fast");
		
	}, function() {
		
		$("#webcss_console").animate({
			height: 20
		}, "fast");
		
	});

});