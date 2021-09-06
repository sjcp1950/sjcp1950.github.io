function slidebox_size(box) {
	$(box).children().css("display", "none");
	if ( $(box).is("[scal]") ) {
		var scal = $(box).attr("scal");
		if ( scal.indexOf(":") != -1 ) {
			var scal_x = scal.split(":")[0];
			var scal_y = scal.split(":")[1];

			$(box).css("height", $(box).outerWidth() / scal_x * scal_y);
		}

		if ( $(box).outerWidth() > $(box).parent().width() ) {
			scal = $(box).parent().width() / $(box).outerWidth();
			$(box).css("width", $(box).outerWidth() * scal);
			$(box).css("height", $(box).outerHeight() * scal);
		}
	}
}

$(document).ready(function() {
	$(".slidebox").each(function(box_i, box) {
		slidebox_size( $(box) );

		$(box).children().attr("class", "slide");
		$(box).children().wrap("<div class='slide_list'></div>");
		$(box).children().wrapAll("<div class='sliding'></div>");
		$(box).find(".slide_list, .sliding").css("width", "100%");
		$(box).find(".slide_list, .sliding").css("height", "100%");
		$(box).find(".slide").css("max-width", "100%");
		$(box).find(".slide").css("max-height", "100%");
		$(box).append("<div class='slide_btn'></div>");
		$(box).find(".slide").css("display", "");

		var slide_cnt = $(box).find(".slide").length;
		var offset = $(box).width() + 10;
		for (var i=1; i<slide_cnt+1; i++) {
			var target = $(box).find(".slide_list:nth-child(" + i + ")");
			$(target).css("right", "calc((100% + 1em) - (100% + 1em) *" + i + ")");
			// $(target).css("padding-top", ($(target).height() - $(target).children().height()) / 2);

			$(box).children("div.slide_btn").append("<span class='slide_btn'></span>");
		}
		$(box).find("span.slide_btn").css("margin-left", "calc(100% / 4 - 2ex / 2)");

		$(box).find("span.slide_btn").click(function() {
			clearTimeout(slide_loop);
			var nth = $(this).index() + 1;
			$(box).find(".sliding").css("margin-left", "calc((100% + 1em) - (100% + 1em) *" + nth + ")");

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
		$(box).find("span.slide_btn:first-child").trigger("click");
	});
	get_html();
});
