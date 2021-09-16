$(document).ready(function() {

// table
	$("table").wrap("<div class='table'></div>");



// main
	$("body").contents().wrapAll("<div id='main'></div>");



// header
	$("#main").before(
		"<header>"+
			"<a href='/' class='header'>"+
				"<img src='/media/favicon.svg' class='header'/>"+
				"<span>세진냉동</span>"+
			"</a>"+
		"</header>");

// header show/hide
	var old_scroll_top = $(document).scrollTop();
	$(window).scroll(function() {
		var scroll_top = $(document).scrollTop();
		var header_height = to_px($("html").css("--header-height"));

		if ( $("header").is(".nav") ) {
			if ( scroll_top == 0 ) {
				$("header").css("top", "0");
			} else {
				var new_top = parseFloat($("header").css("top"), 10) + (old_scroll_top-scroll_top);
				if ( new_top <= header_height*-1 ) {
					$("header").css("top", header_height*-1)
				} else if ( new_top >= 0 ) {
					$("header").css("top", "0")
				} else {
					$("header").css("top", new_top);
				}
			}
		}

		old_scroll_top = scroll_top;
	});

jQuery(window).on( "scrollstart", function( event ) { 
	alert( "T" )
} )



// navigator
	var nav_html = 
		"<nav>"+
			"<ul>"+
				"<li><a href='/about/'>회사소개<img src='/media/favicon.svg'/></a>"+
				"</li>"+
				"<li><a href='/map/'>오시는 길<img src='/media/map.svg'/></a>"+
				"</li>"+
			"</ul>"+
		"</nav>";
	if ( pathname == "/" ) {
// navigator in /index.html
		$("#main").after(nav_html);
		$("#main").attr("id", "main_root");
		$("nav").children().addClass("nav");
		$("ul.nav").find("li").children("ul").remove();
		$("ul.nav").unwrap("nav");
		$("ul.nav").find("a").wrapInner("<div></div>");

		function nav_resize() {
			var nav_height = $("ul.nav").find("a").width();
			$("ul.nav").find("img").css("height", nav_height / 3);

			var cnt = $("ul.nav").children().length;
			var width = $("ul.nav").children().outerWidth();
			var margin = parseFloat($("ul.nav").children().css("margin-left"), 10) * 2;
			var nav_width = (width + margin) * cnt;
			if ( nav_width <= $(window).width() ) {
				$("ul.nav").css("margin", "auto");
			} else {
				$("ul.nav").css("margin", "");
			}
		}
	} else {
// navigator
		$("#main").before(nav_html);
		$("nav").find("a").children("img").remove();
		$("nav").find("li").children("a[href='" + pathname + "']").parent().attr("select", "");
		$("nav").find("li[select]").parent("ul").parent("li").attr("select", "");

		$("nav").children("ul").children("li").each(function(li_i, li) {
			if ( $(li).children("ul").length != 0 ) {
				var href = $(li).children("a").attr("href");
				$(li).children("a").attr("href_", href);
				$(li).children("a").removeAttr("href");
			}
		});

		$("nav").children("ul").children("li").hover(function() {
			var nav_drop = $(this).children("ul");
			var nav_drop_height = 0;
			for (var i=0; i<$(nav_drop).find("a").length; i++) {
				nav_drop_height = nav_drop_height + $(nav_drop).find("li:nth-child(" + (i+1) + ")").find("a").outerHeight();
			}
			$(this).children("ul").css("height", nav_drop_height);

			if ( $(this).children("ul").length != 0 ) {
				var this_ = $(this);
				setTimeout(function() {
					$(this_).children("a").attr("href", $(this_).children("a").attr("href_"));
				}, 10);
			}
		}, function() {
			$(this).children("ul").css("height", "");
			if ( $(this).children("ul").length != 0 ) {
				$(this).children("a").removeAttr("href");
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
				nav_hide();
			} else {
				nav_show();
			}
		});

// nav in sidebar
		$("#main").contents().wrapAll("<section></section>");
		$("#main").prepend("<div id='sidebar'>" + $("nav").html() + "</div>");
		$("#sidebar").children("ul").children("li:not([select])").remove();
		$("#sidebar").find("li").unwrap("ul");
		$("#sidebar").children("li").contents().wrapAll("<ul></ul>");
		$("#sidebar").find("ul").unwrap("li");
		$("#sidebar").children("ul").children("a").replaceWith("<span>" + $("#sidebar").children("ul").children("a").text() + "</span>");
		$("#sidebar").find("ul").children("li").wrapAll("<div></div>");
		if ( $("#sidebar").find("div").length != 0 ) {
			$("#sidebar").find("span").attr("drop", "");
		}
		$("#sidebar").find("span").click(function() {
			if ( $(this).is("[drop]") ) {
				var sidebar_drop = $("#sidebar").find("div");
				if ( $(sidebar_drop).is("[drop=drop]") ) {
					$(sidebar_drop).attr("drop", "");
					$(this).removeAttr("class");
				} else if ( $(sidebar_drop).is("[drop]") ) {
					$(sidebar_drop).attr("drop", "drop");
					$(this).attr("class", "rotate");
				}

				if ( $(sidebar_drop).is("[drop=drop]") ) {
					var sidebar_drop_height = 1;
					for (var i=0; i<$(sidebar_drop).find("a").length; i++) {
						sidebar_drop_height = sidebar_drop_height + $(sidebar_drop).find("li:nth-child(" + (i+1) + ")").find("a").outerHeight();
					}
					$("#sidebar").find("div").css("height", sidebar_drop_height);
				} else if ( $(sidebar_drop).is("[drop]") ) {
					$("#sidebar").find("div").css("height", "0");
				}
			}
		});

// nav resize
		var navigator_height = to_px( $("html").css("--navigator-height") );
		function nav_resize() {
			if ( navigator_height < $("nav").innerHeight() || $(window).innerWidth() < $(window).innerHeight() ) {
				if ( $("header").children("div.nav").length == 0 ) {
					$("header").addClass("nav");
					$("nav").addClass("hide");
					$("header").append("<div class='nav'>" + $("nav").html() + "</div>");
					$("div.nav").find("li[select]").parent("ul").parent("li").removeAttr("select");
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


			if ( $("#sidebar").find("span").is("[drop]") ) {
				if ( $("#sidebar").outerWidth() == $("#sidebar").parent().width() ) {
					$("#sidebar").find("span").attr("drop", "drop");
					if ( $("#sidebar").find("div").is("[drop=drop]") == false ) {
						$("#sidebar").find("div").attr("drop", "");
					}
				} else {
					$("#sidebar").find("span").attr("drop", "");
					$("#sidebar").find("span").removeAttr("class");
					$("#sidebar").find("div").removeAttr("drop");
					$("#sidebar").find("div").css("height", "");
				}
			}
		}
	}

	nav_resize();
	$(window).resize(function() {
		nav_resize();
	});



// footer
	$("body").append(
		"<footer>"+
//			"<img src='/media/favicon.svg'/>"+
//			"<span>H.P : <a href='tel:01045451998'>010-4545-1998</a></span>"+
			"<span>TEL : <a href='tel:0533551950'>(053) 355-1950</a></span>"+
			"<span>FAX : (053) 355-1955</span>"+
			"<span>E-mail : <a href='mailto:sjcp1950@naver.com'>sjcp1950@naver.com</a></span>"+
			"<span>41595 <a title='세진냉동 - 카카오맵' href='https://map.kakao.com/?map_type=TYPE_MAP&from=roughmap&srcid=1618163644&itemId=1618163644&q=%EC%84%B8%EC%A7%84%EB%83%89%EB%8F%99&urlX=857547.0&urlY=664686.0'>대구광역시 북구 칠성남로 29-2</a></span>"+
			"<span>© 2021. 세진냉동 All Rights Reserved.<span>"+
		"</footer>");
});
