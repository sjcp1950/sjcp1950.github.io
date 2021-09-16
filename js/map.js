document.write("<script charset='UTF-8' class='daum_roughmap_loader_script' src='https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'></script>"); // Kakaomap Install Script

$(document).ready(function() {
	$("[map]").each(function(map_i, map) {
		var ratio = $(map).attr("ratio").split(":");
		$(map).css("height", $(map).innerWidth() / ratio[0] * ratio[1]);

		var mapWidth = $(map).width();
		var mapHeight = $(map).height() - 32;

		if ( $(map).attr("map") == "세진냉동" ) {
			// map Node
			$(map).html("<div id='daumRoughmapContainer1630216012970' class='root_daum_roughmap root_daum_roughmap_landing'></div>");

			// map Execute Script
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
			$(map).css("height", $(map).innerWidth() / ratio[0] * ratio[1]);
			$(map).find("#daumRoughmapContainer1630216012970").children(".wrap_map").css("height", $(map).height()-32);
		});
	});
})
