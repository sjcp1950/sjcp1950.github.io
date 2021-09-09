document.write("<script charset='UTF-8' class='daum_roughmap_loader_script' src='https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'></script>"); // Kakaomap Install Script

$(document).ready(function() {
	$("[kakaomap]").each(function(map_i, map) {
		if ( $(map).parent().width() < $(map).width() ) {
			var scal = $(map).parent().width()/$(map).width();
			$(map).css("width", $(map).css("width").slice(0, -2) * scal );
			$(map).css("height", $(map).css("height").slice(0, -2) * scal );
		}
		$(map).css("display", "");

		var mapWidth = $(map).width();
		var mapHeight = $(map).height();

		if ( $(map).attr("kakaomap") == "세진냉동" ) {
			// Kakaomap Node
			$(map).html("<div id='daumRoughmapContainer1630216012970' class='root_daum_roughmap root_daum_roughmap_landing'></div>");

			// Kakaomap Execute Script
			$(map).append(
				"<script charset='UTF-8'>"+
					"new daum.roughmap.Lander({"+
						"'timestamp' : '1630216012970',"+
						"'key' : '276b5',"+
						"'mapWidth' : '" + mapWidth + "',"+
						"'mapHeight' : '" + mapHeight + "',"+
					"}).render();"+
				"</script>");
			$(map).css("margin", "auto");
		}
		$(map).append("<div>" + $("[map_for='" + $(map).attr("kakaomap") + "']").html() + "</div>");
		$("[map_for='" + $(map).attr("kakaomap") + "']").remove();
		$(map).next().css("width", $(map).width());
		$(map).next().css("margin", "auto");
		$(map).next().css("margin-top", "5ex");
	});
})
