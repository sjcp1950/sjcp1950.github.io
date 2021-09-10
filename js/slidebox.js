function slidebox_height(slidebox, scal) {
	$(slidebox).css("height", box_scal( $(slidebox) , scal ));
}

function slide_height(slidebox) {
	$(slidebox).find(".slide").each(function(target_i, target) {
		$(target).css("margin-top", ($(target).parent().height() - $(target).innerHeight()) / 2);
	});
}

$(document).ready(function() {
	$(".slidebox").each(function(slidebox_i, slidebox) {
		$(slidebox).children().css("display", "none");

		var scal = $(slidebox).attr("scal");
		slidebox_height( $(slidebox) , scal );

		$(slidebox).children().addClass("slide");
		$(slidebox).children().wrap("<div class='slide_list'></div>");
		$(slidebox).children().wrapAll("<div class='sliding'></div>");
		$(slidebox).append("<div class='slide_btn'></div>");
		$(slidebox).find(".slide").css("display", "");

		var slide_cnt = $(slidebox).find(".slide").length;
		for (var i=1; i<slide_cnt+1; i++) {
			var target = $(slidebox).find(".slide_list:nth-child(" + i + ")");
			$(target).css("right", "calc((100% + 1em) - ((100% + 1em) *" + i + "))");
			$(slidebox).children("div.slide_btn").append("<span class='slide_btn'></span>");
		}
		$(slidebox).find("span.slide_btn").css("margin-left", "calc(100% / " + (slide_cnt + 1) + " - 2ex / 2)");
		slide_height( $(slidebox) );

		$(slidebox).find("span.slide_btn").click(function() {
			clearTimeout(slide_loop);
			var nth = $(this).index() + 1;
			$(slidebox).find(".sliding").css("margin-left", "calc((100% + 1em) - ((100% + 1em) *" + nth + "))");

			$(this).parent().children().css("background-color", "");
			$(this).css("background-color", "var(--border-color)");

			if ( $(this).next().length == 1 ) {
				var slide_click = $(this).next();
			} else {
				var slide_click = $(this).parent().children("span.slide_btn:first-child");
			}
			var slide_loop = setTimeout(function() {
				$(slide_click).trigger("click");
			}, 3500);
			$(this).parent().children().click(function() {
				clearTimeout(slide_loop);
			});
		});
		$(slidebox).find("span.slide_btn:first-child").trigger("click");

		$(window).resize(function() {
			slidebox_height( $(slidebox) , scal );
			slide_height( $(slidebox) );
		});
	});
});
