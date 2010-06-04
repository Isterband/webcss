if(typeof jQuery == 'undefined') {
	
	var script = document.createElement("script");
	script.setAttribute("src", "webcss/js/jquery-1.4.2.min.js");
	script.setAttribute("type", "text/javascript");
	document.getElementsByTagName("head")[0].appendChild(script);
	
	script = document.createElement("script");
	script.setAttribute("src", "webcss/js/webcss.jquery.functions.js");
	script.setAttribute("type", "text/javascript");
	document.getElementsByTagName("head")[0].appendChild(script);
	
} else {
	
	$("head").append("<script type=\"text/javascript\" src=\"webcss/js/webcss.jquery.functions.js\">");
	
}