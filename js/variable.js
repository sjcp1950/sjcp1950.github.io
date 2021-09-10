var url = location.href;
var pathname = location.pathname;
var param = "?" + url.split("?")[1];
function get_param(target) {
	if ( param.indexOf("?" + target + "=") != -1 || param.indexOf("&" + target + "=") != -1 ) {
		var get = param.split(target + "=")[1].split("&")[0];
	} else {
		var get = "";
	}
	return get;
}



// device

var device = navigator.userAgent;
if (	device.match(/iPhone|iPod|iPad|Android|Windows CE|Windows CE;|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|MOT/i) != null
	|| device.match(/LG|SAMSUNG|Samsung/) != null) {
	var device = "mobile";
} else {
	var device = "pc";
}



// to px

function to_px(size, target) {
	var get = parseFloat(size, 10);
	var html_size = parseFloat($("html").css("font-size"), 10);
	var target_size = parseFloat($(target).css("font-size"), 10);
	if ( !target_size ) {
		target_size = parseFloat($("html").css("font-size"), 10);
	}

	if ( size.indexOf("rem") != -1 ) {
		size = html_size * get;
	} else if ( size.indexOf("em") != -1 ) {
		size = target_size * get;
	}

	return size;
}



// scal

function box_scal(target, scal) {
	var output = "";
	if ( scal && scal.indexOf(":") != -1 ) {
		var scal_x = scal.split(":")[0];
		var scal_y = scal.split(":")[1];
//		$(target).css("height", $(target).outerWidth() / scal_x * scal_y);
		output = $(target).outerWidth() / scal_x * scal_y;
	} else {
		if ( $(target).height() == 0 ) {
//			$(target).css("height", "100%");
			output = "100%";
		}
	}

	return output;
}
