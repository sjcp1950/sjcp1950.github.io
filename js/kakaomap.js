document.write("<script charset='UTF-8' class='daum_roughmap_loader_script' src='https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'></script>"); // Kakaomap Install Script

$(document).ready(function() {
	$("[kakaomap]").each(function(map_i, map) {
		var scal = $(map).attr("scal");
		var scal_output = box_scal( $(map) , scal );
		$(map).css("height", scal_output);
		$(map).css("display", "");

		var mapWidth = $(map).width();
		var mapHeight = $(map).height() - 32;

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
		}

		$(window).resize(function() {
			$(map).find("#daumRoughmapContainer1630216012970").css("width", $(map).width());
			$(map).find("#daumRoughmapContainer1630216012970").children(".wrap_map").css("height", $(map).hidth());
		});
	});
})
