function slide_resize(target) {
	$(target).find(".slide").each(function(slide_i, slide) {
		var margin_1 = ($(target).height() - $(slide).outerHeight()) / 2;
		var margin_2 = ($(target).width() - $(slide).outerWidth()) / 2;
		$(slide).css("margin", margin_1 + "px " + margin_2 + "px");
	});





// remove
	$(".slide:not(img)").each(function(slide_i, slide) {
		var slide_height = $(slide).parents(".slidebox").height();
		var size = parseFloat($(slide).css("font-size"), 10);
		$(slide).css("padding-top", (slide_height-size) / 2);
	});
}



$(document).ready(function() {
	var slidebox = $(".slidebox");
	$(slidebox).children().addClass("slide");
	$(slidebox).children().wrapAll("<div class='sliding'></div>");
	$(slidebox).append("<div class='slide_btn'></div>");
	$(slidebox).find(".slide").each(function(slide_i, slide) {
		$(slide).css("right", "calc(100% - 100% * " + (slide_i + 1) + ")");
		$(slidebox).find("div.slide_btn").append("<span class='slide_btn'></span>");
	});

	$(slidebox).find("span.slide_btn").click(function() {
		clearTimeout(slide_loop);
		var i = $(this).index() + 1;
		$(slidebox).find(".sliding").css("left", "calc(100% - 100% * " + i + ")");

		$(this).parent().children().css("background-color", "");
		$(this).css("background-color", "var(--border-color)");

		if ( $(this).next().length == 1 ) {
			var slide_click = $(this).next();
		} else {
			var slide_click = $(this).parent().children("span.slide_btn:first-child");
		}
		var slide_loop = setTimeout(function() {
			$(slide_click).trigger("click");
		}, 5000);
		$(this).parent().children().click(function() {
			clearTimeout(slide_loop);
		});
	});
	$(slidebox).find("span.slide_btn:first-child").trigger("click");

	slide_resize( $(slidebox) );
	$(window).resize(function() {
		slide_resize( $(slidebox) );
	});
});
