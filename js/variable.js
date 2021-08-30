var url = location.href;
var pathname = location.pathname;



// device

var var_device = "";
var agent = navigator.userAgent;
if (
	agent.match(/iPhone|iPod|iPad|Android|Windows CE|Windows CE;|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|MOT/i) != null
	|| agent.match(/LG|SAMSUNG|Samsung/) != null)
{
	var_device = "mobile";
} else {
	var_device = "pc";
}



// 1100 over

var var_width = "";
if ( $(window).innerWidth() < 1100 ) {
	var_width = 1099;
} else {
	var_width = 1100;
}



// width - height

var var_com = "";
var var_sub = $(window).innerWidth() - $(window).innerHeight();
if ( var_sub < 0 ) {
	var_com = "height";
} else if ( var_sub > 0 ) {
	var_com = "width";
} else {
	var_com = "0";
}
