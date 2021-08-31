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

var agent = navigator.userAgent;
if (	agent.match(/iPhone|iPod|iPad|Android|Windows CE|Windows CE;|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|MOT/i) != null
	|| agent.match(/LG|SAMSUNG|Samsung/) != null) {
	var device = "mobile";
} else {
	var device = "pc";
}



// device width

if ( $(window).innerWidth() < 1100 ) {
	var min_width = 0;
} else {
	var min_width = 1100;
}
