(function($) {
	var states = {};
	var btn = null;
	$.jvalSetup = function(ids) {
		$.each(ids, function(i, e) {
			states[e] = false;
		});
	}
	$.fn.jval = function() {
		btn = this.attr("id");
		this.prop("disabled", true);
	}
	function assert() {
		$.each(states, function(i, e) {
			if (btn !== null) {
				if (e) {
					$('#' + btn).prop("disabled", false);
				} else {
					$('#' + btn).prop("disabled", true);
				}
			}
		});
	}
    $.fn.jwarnMin = function(options) {
    	var obj = this;
    	this.blur(function() {
			if (obj.val().length === 0) {
				$('#' + options.div).html("<p style='color: red;'>" + options.emptyMessage + "</p>");
				states[obj.attr("id")] = false;
	    	} else {
	    		if (obj.val().length < options.min) {
	    			$('#' + options.div).html("<p style='color: red;'>" + options.minMessage + "</p>");
	    			states[obj.attr("id")] = false;
	    		} else {
	    			$('#' + options.div).html('');
	    			states[obj.attr("id")] = true;
	    		}
	    	}
	    	assert();
    	});
    }
    $.fn.jwarnEmail = function(options) {
    	var obj = this;
    	this.blur(function() {
			if (obj.val().length === 0) {
				$('#' + options.div).html("<p style='color: red;'>" + options.emptyMessage + "</p>");
				states[obj.attr("id")] = false;
	    	} else {
	    		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	    		if (!pattern.test(obj.val())) {
	    			$('#' + options.div).html("<p style='color: red;'>" + options.invalidMessage + "</p>");
	    			states[obj.attr("id")] = false;
	    		} else {
	    			$('#' + options.div).html('');
	    			states[obj.attr("id")] = true;
	    		}
	    	}
	    	assert();
    	});
    }
	$.fn.jwarnUrl = function(options) {
    	var obj = this;
    	this.blur(function() {
			if (obj.val().length === 0) {
				$('#' + options.div).html("<p style='color: red;'>" + options.emptyMessage + "</p>");
				states[obj.attr("id")] = false;
	    	} else {
	    		var pattern = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
	    		if (!pattern.test(obj.val())) {
	    			$('#' + options.div).html("<p style='color: red;'>" + options.invalidMessage + "</p>");
	    			states[obj.attr("id")] = false;
	    		} else {
	    			$('#' + options.div).html('');
	    			states[obj.attr("id")] = true;
	    		}
	    	}
	    	assert();
    	});
    }
}(jQuery));
