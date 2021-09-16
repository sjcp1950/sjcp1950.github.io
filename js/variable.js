var url = location.href;
var pathname = location.pathname;
var param = "?" + url.split("?")[1];

function get_param(target) {
	var get = "";
	if ( param.indexOf("?" + target + "=") != -1 || param.indexOf("&" + target + "=") != -1 ) {
		get = param.split(target + "=")[1].split("&")[0];
	}
	return get;
}



var agent = navigator.userAgent;

// device
if (	agent.match(/iPhone|iPod|iPad|Android|Windows CE|Windows CE;|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|MOT/i) != null
	|| agent.match(/LG|SAMSUNG|Samsung/) != null) {
	var device = "mobile";
} else {
	var device = "pc";
}



// Explorer

var agent_lower = agent.toLowerCase();
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent_lower.indexOf('msie') != -1) ) {
	document.write("<p style='font-size: 1.25em'>Internet Explorer 브라우저를 지원하지 않습니다.<br/><a href='microsoft-edge:" + url + "' style='font-size: 1rem'>Microsoft Edge로 열기</a></p>");
	location.href = "microsoft-edge:" + url;
}



// to px

function to_px(size, target) {
	var get = parseFloat(size, 10);
	var html_size = parseFloat($("html").css("font-size"), 10);
	var target_size = parseFloat($(target).css("font-size"), 10);
	if ( !target_size ) {
		target_size = html_size;
	}

	if ( size.indexOf("rem") != -1 ) {
		size = html_size * get;
	} else if ( size.indexOf("em") != -1 ) {
		size = target_size * get;
	}

	return size;
}
