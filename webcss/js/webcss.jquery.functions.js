$(document).ready(function() {

	$.fn.insertAtCaret = function (myValue) { return this.each(function(){ if (document.selection) { this.focus(); sel = document.selection.createRange(); sel.text = myValue; this.focus(); } else if (this.selectionStart || this.selectionStart == '0') { var startPos = this.selectionStart; var endPos = this.selectionEnd; var scrollTop = this.scrollTop; this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length); this.focus(); this.selectionStart = startPos + myValue.length; this.selectionEnd = startPos + myValue.length; this.scrollTop = scrollTop; } else { this.value += myValue; this.focus(); } }); }; 
	
	var ctrl = false;
	
	function spawn() {
		
		$("head").append("<link href=\"webcss/webcss.css\" rel=\"stylesheet\" type=\"text/css\" />");
		
		$("body").prepend("<div id=\"webcss_console\"></div>");
		$("#webcss_console").append("<div id=\"webcss_console_head\"></div>");
		$("#webcss_console").append("<div id=\"console_container\"><textarea id=\"webcss_textarea\"></textarea></div>");
		var css_src = $("link[name=\"webcss\"]").attr("href");
		
		$("#webcss_console textarea").load(css_src);
		
	}
	
	spawn();
	
	function save_css() {
	
		var data = $("#webcss_console textarea").val();
		var file = $("link[name=\"webcss\"]").attr("href");

		$.ajax({
			type: "post",
			url: "webcss/save.php",
			data: "data=" + data + "&file=" + file,
			success: function(result) {
				if(result != "success") {
					alert("An error has occured: couldn't save css-file");
					alert(result);
				} else {
					update_css();
				}
			}
		});
		
	}
	
	function update_css() {
		
		var timestamp = new Date().getTime();
		var css_url = $("link[name=\"webcss\"]").attr("href");
		$("link[name=\"webcss\"]").remove();
		$("head").append("<link href=\"" + css_url + "?" + timestamp + "\" rel=\"stylesheet\" type=\"text/css\" name=\"webcss\"/>");
		
	}

	$("#webcss_console_head").toggle(function() {
		
		$("#webcss_console").animate({
			height: 400
		}, "fast", function() {
			
			$("#webcss_console textarea").focus();
			
		});
		
	}, function() {
		
		$("#webcss_console").animate({
			height: 20
		}, "fast");
		
	});
	
	$("#webcss_console textarea").keydown(function(e) {
	
		if(e.keyCode == 9) {
			
			e.preventDefault();
			
			$(this).insertAtCaret("\t");
		
		}
		
		if(e.keyCode == 16) {
		
			shift = true;
			
		}
		
		if(e.keyCode == 17) {
			
			ctrl = true;
			
		}
		
		if(e.keyCode == 83 && ctrl == true) {
		
			e.preventDefault();
		
			save_css();
		
		}
		
	});
	
	$("#webcss_console textarea").keyup(function(e) {
		
		if(e.keyCode == 17) {
		
			ctrl = false;
			
		}
		
	});

});