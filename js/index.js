$(document).ready(function() {
	$("img").click(function() {
		if ( $(this).parent().attr("class") != "sliding" ) {
			location.href = $(this).attr("src");
		}
	});

	$(".slide").each(function(slide_i, slide) {
		if ( $(slide).parent().width() < $(slide).width() ) {
			var scal = $(slide).parent().width()/$(slide).width();
			$(slide).css("width", $(slide).css("width").slice(0, -2) * scal );
			$(slide).css("height", $(slide).css("height").slice(0, -2) * scal );
		}

		var slide_cnt = $(slide).children().length;

		$(slide).children().attr("class", "sliding_in");
		$(slide).children().wrap("<div class='sliding'></div>");
		$(slide).children().wrapAll("<div class='slide_list'></div>");
		$(slide).find("div").css("width", $(slide).css("width"));
		$(slide).find("div").css("height", $(slide).css("height"));
		$(slide).find(".sliding").children().css("max-width", $(slide).css("width"));
		$(slide).find(".sliding").children().css("max-height", $(slide).css("height"));
		$(slide).append("<div class='slide_btn'></div>");

		var offset = $(slide).width();
		for (var i=1; i<slide_cnt+1; i++) {
			var sliding = $(slide).find(".sliding:nth-child(" + i + ")");
			$(sliding).css("right", offset+10 - offset*i - 10*i);
			// $(sliding).css("padding-top", ($(sliding).height() - $(sliding).children().height())/2);

			$(slide).children("div.slide_btn").append("<span class='slide_btn'></span>");
		}
		$(slide).find("span.slide_btn").css("margin-left", ($("div.slide_btn").width() - $("span.slide_btn").width() * slide_cnt) / (slide_cnt+1));

		$(slide).find("span.slide_btn").click(function() {
			clearTimeout(slice_loop);
			var nth = $(this).index() + 1;
			$(slide).find(".slide_list").css("margin-left", offset+10 - offset*nth - 10*nth);
			$(this).parent().children().css("background-color", "");
			$(this).css("background-color", "var(--border-color)");

			if ( $(this).next().length == 1 ) {
				var slide_click = $(this).next();
			} else {
				var slide_click = $(this).parent().children("span.slide_btn:first-child");
			}
			var slice_loop = setTimeout(function() {
				$(slide_click).trigger("click");
			}, 3500);
			$(this).parent().children().click(function() {
				clearTimeout(slice_loop);
			});
		});
		$(slide).find("span.slide_btn:first-child").trigger("click");
	});
});
