$(document).ready(function() {

// header
	$("section").before("<header><a href='/' class='header'>세진냉동</a></header>");


// navigator
	$("section").before(
		"<nav>"+
			"<ul>"+
				"<li><a href='/'>nav_1</a></li>"+
				"<li><a href='/map/'>지도</a></li>"+
			"</ul>"+
		"</nav>");
	var path_check = pathname.split("/");
	$("nav").find("li").children("a[href='/" + path_check[1] + "/']").css("background-color", "var(--navigator-background-hover)");



// footer
	$("section").after(
		"<footer>"+
			"<span>"+
				"<span>TEL : <a href='tel:053-355-1950'>(053) 355-1950</a></span>"+
				"<span>FAX : (053) 355-1955</span>"+
				"<span>E-mail : <a href='mailto:sjcp1950@naver.com'>sjcp1950@naver.com</a></span>"+
				"<span>41595 <a title='세진냉동 - 카카오맵' href='https://map.kakao.com/?map_type=TYPE_MAP&from=roughmap&srcid=1618163644&itemId=1618163644&q=%EC%84%B8%EC%A7%84%EB%83%89%EB%8F%99&urlX=857547.0&urlY=664686.0'>대구 북구 칠성남로 29-2</a></span>"+
			"</span>"+
			"<span>"+
				"<span>© 2021. 세진냉동<span>"+
			"</span>"+
		"</footer>");
});
