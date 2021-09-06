function get_html() {
	if ( $(window).outerWidth() < 786 ) {
		var line = 1;
	} else if ( $(window).outerWidth() < 1200 ) {
		var line = 2;
	} else {
		var line = 3;
	}

	if ( $(".section").length != line ) {
		var box_length = $(".box").length;
		$("section").children().wrapAll("<div class='old'></div>");
		var old_height = $("section").children("div.old").height();
		$("section").children("div.old").css("height", old_height);
		$("sectino").children("div.old").children().css("display", "none");

		for (var i=0; i<box_length; i++) {
			var box = $("[box=" + i + "]").parent();
			if ( i < line ) {
				$("section").append("<div class='section'></div>");
			}

			var box_height = [];
			for (var ii=0; ii<$("section").children("div:not(.old)").length; ii++) {
				box_height.push( $("section").children("div:nth-child(" + (ii+2) + ")").height() );
			}
			var min_height = Math.min.apply(null, box_height);
			for (var ii=0; ii<$("section").children("div:not(.old)").length; ii++) {
				var insert_box = $("section").children("div:nth-child(" + (ii+2) + ")");
				if ( $(insert_box).height() == min_height ) {
					$(box).appendTo( $(insert_box) );
					break;
				}
			}
		}

		$("section").children("div.old").remove();
		if ( $("section").children("div").length == 1 ) {
			$("section").children("div").css("width", "98%");
			$("section").children("div").css("margin-left", "1%");
		} else if ( $("section").children("div").length == 2 ) {
			$("section").children("div").css("width", "47%");
			$("section").children("div").css("margin-left", "2%");
		} else if ( $("section").children("div").length == 3 ) {
			$("section").children("div").css("width", "30%");
			$("section").children("div").css("margin-left", "3.333%");
		}
	}
}

$(document).ready(function() {
	$("section").children().wrap("<div class='box'></div>");
	$(".box").each(function(box_i, box) {
		$(box).children().attr("box", box_i);
	});
	get_html();
});

$(window).resize(function() {
	get_html();
});
