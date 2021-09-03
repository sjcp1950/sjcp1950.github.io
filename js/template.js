$(document).ready(function() {
	$("body").children().wrapAll("<section></section>");

// header
	$("section").before("<header><a href='/' class='header'><img src='/media/favicon.svg' class='header'/>세진냉동</a></header>");
	var header_FontSize = $("header").css("font-size").slice(0, -2);
	$("header").find("img").attr("width", header_FontSize);

// navigator
	$("section").before(
		"<nav>"+
			"<ul>"+
				"<li><a href='/saejin/'>회사소개</a></li>"+
				"<li><a href='/map/'>오시는 길</a></li>"+
			"</ul>"+
		"</nav>");
	var path_check = pathname.split("/");
	$("nav").find("li").children("a[href='/" + path_check[1] + "/']").css("background-color", "var(--navigator-background-hover)");



// footer
	$("section").after(
		"<footer lang='en'>"+
			"<span>"+
				"<span>H.P : <a href='tel:01045451998'>010-4545-1998</a></span>"+
				"<span>TEL : <a href='tel:0533551950'>(053) 355-1950</a></span>"+
				"<span>FAX : (053) 355-1955</span>"+
				"<span>E-mail : <a href='mailto:sjcp1950@naver.com'>sjcp1950@naver.com</a></span>"+
				"<span>41595 <a title='세진냉동 - 카카오맵' href='https://map.kakao.com/?map_type=TYPE_MAP&from=roughmap&srcid=1618163644&itemId=1618163644&q=%EC%84%B8%EC%A7%84%EB%83%89%EB%8F%99&urlX=857547.0&urlY=664686.0'>대구광역시 북구 칠성남로 29-2</a></span>"+
				"<span>© 2021. 세진냉동 All Rights Reserved.<span>"+
			"</span>"+
		"</footer>");
});
