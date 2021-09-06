$(document).ready(function() {

//section
	$("body").children().wrap("<div class='box'></div>");
	$(".box").each(function(box_i, box) {
		$(box).children().attr("box", box_i);
	});
	$("body").children().wrapAll("<section></section>");



// header
	$("section").before(
		"<header>"+
			"<a href='/' class='header'>"+
				"<img src='/media/favicon.svg' class='header'/>"+
				"세진냉동"+
			"</a>"+
		"</header>");



// navigator
	$("section").before(
		"<nav>"+
			"<ul>"+
				"<li><a href='/saejin/'>회사소개</a>"+
				"</li>"+
				"<li><a href='/map/'>오시는 길</a></li>"+
			"</ul>"+
		"</nav>");
	var path_check = pathname.split("/");
	$("nav").find("li").children("a[href='/" + path_check[1] + "/']").css("background-color", "var(--navigator-background-hover)");

	$("nav").children("ul").children("li").each(function(li_i, li) {
		if ( $(li).children("ul").length != 0 ) {
			var href = $(li).children("a").attr("href");
			$(li).children("a").attr("href_", href);
			$(li).children("a").removeAttr("href");

			$(li).children("a").hover(function() {
				setTimeout(function() {
					$(li).children("a").attr("href", href);
				}, 10);
			}, function() {
				$(li).children("a").removeAttr("href");
			});
		}
	});

// navigator btn
	function nav_hide() {
		$(".nav_btn").removeClass("cross");
		$("header").children("div.nav").removeClass("show");
		$("html").css("overflow-y", "auto");
	}
	function nav_show() {
		$(".nav_btn").addClass("cross");
		$("header").children("div.nav").addClass("show");
		$("html").css("overflow-y", "hidden");
	}

	$("header").append("<div class='nav_btn'><span></span><span></span><span></span></div>");
	$(".nav_btn").click(function() {
		if ( $(this).is(".cross") ) {
			nav_hide()
		} else {
			nav_show()
		}
	});

	var navigator_height = to_px( $("html").css("--navigator-height") );
	function nav_resize() {
		if ( navigator_height < $("nav").innerHeight() || $(window).innerWidth() < $(window).innerHeight() ) {
			$("header").addClass("nav");
			$("nav").addClass("hide");
			if ( $("header").children("div.nav").length == 0 ) {
				$("header").append("<div class='nav'>" + $("nav").html() + "</div>");
				$("div.nav").find("a[href_]").each(function(a_i, a) {
					$(a).attr("href", $(a).attr("href_"));
				});
			}
		} else {
			nav_hide();
			$("header").removeClass("nav");
			$("nav").removeClass("hide");
			$("header").children("div.nav").remove();
		}
	}; nav_resize();
	$(window).resize(function() {
		nav_resize();
	});



// footer
	$("section").after(
		"<footer lang='en'>"+
			"<img src='/media/favicon.svg'/>"+
			"<span>H.P : <a href='tel:01045451998'>010-4545-1998</a></span>"+
			"<span>TEL : <a href='tel:0533551950'>(053) 355-1950</a></span>"+
			"<span>FAX : (053) 355-1955</span>"+
			"<span>E-mail : <a href='mailto:sjcp1950@naver.com'>sjcp1950@naver.com</a></span>"+
			"<span>41595 <a title='세진냉동 - 카카오맵' href='https://map.kakao.com/?map_type=TYPE_MAP&from=roughmap&srcid=1618163644&itemId=1618163644&q=%EC%84%B8%EC%A7%84%EB%83%89%EB%8F%99&urlX=857547.0&urlY=664686.0'>대구광역시 북구 칠성남로 29-2</a></span>"+
			"<span>© 2021. 세진냉동 All Rights Reserved.<span>"+
		"</footer>");
	function footer_height() {
		$("section").css("padding-bottom", "calc(" + $("footer").innerHeight() + "px + 1em)");
	}; footer_height();
	$(window).resize(function() {
		footer_height();
	});



// section
	function get_html() {
		var box_html = [];
		for (var box_i=0; box_i<$(".box").length; box_i++) {
			box_html.push( $("[box=" + box_i + "]").parent().html() );
		}
		$("section").html("");

		if ( $(window).innerWidth() < 768 ) {
			var line = 1;
		} else if ( $(window).innerWidth() < 1024 ) {
			var line = 2;
		} else {
			var line = 3;
		}
		for (var i=0; i<box_html.length; i++) {
			if ( i < line ) {
				$("section").append("<div></div>");
			}

			var div_height = [];
			for (var ii=0; ii<$("section").children().length; ii++) {
				div_height.push( $("section").children("div:nth-child(" + (ii+1) + ")").innerHeight() );
			}
			for (var ii=0; ii<div_height.length; ii++) {
				var check_box = $("section").children("div:nth-child(" + (ii+1) + ")");
				var check_height = Math.min.apply(null, div_height);
				if ( $(check_box).innerHeight() == check_height ) {
					$(check_box).append("<div class='box'>" + box_html[i] + "</div>");
					break;
				}
			}
		}

		if ( $("section").children().length == 1 ) {
			$("section").children().css("width", "98%");
			$("section").children().css("margin-left", "1%");
		} else if ( $("section").children().length == 2 ) {
			$("section").children().css("width", "48.5%");
			$("section").children().css("margin-left", "1%");
		} else if ( $("section").children().length == 3 ) {
			$("section").children().css("width", "33%");
			$("section").children().css("margin-left", ".333%");
		}
	}; get_html();

	$(window).resize(function() {
		get_html();
	});
});
