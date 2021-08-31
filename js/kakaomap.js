document.write("<script charset='UTF-8' class='daum_roughmap_loader_script' src='https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'></script>"); // Kakaomap Install Script

$(document).ready(function() {
	var width = $("[kakaomap=세진냉동]").parent().width();
	var height = $("[kakaomap=세진냉동]").parent().height();
	if ( width < height ) {
		var mapWidth = width;
	} else {
		var mapWidth = height;
	}

	// Kakaomap Node
	$("[kakaomap=세진냉동]").html("<div id='daumRoughmapContainer1630216012970' class='root_daum_roughmap root_daum_roughmap_landing'</div>");

	// Kakaomap Execute Script
	$("[kakaomap=세진냉동]").append(
		"<script charset='UTF-8'>"+
			"new daum.roughmap.Lander({"+
				"'timestamp' : '1630216012970',"+
				"'key' : '276b5',"+
				"'mapWidth' : '" + mapWidth + "',"+
				"'mapHeight' : '" + (mapWidth-32) + "',"+
			"}).render();"+
		"</script>");
	$("[kakaomap=세진냉동]").children().css("margin", "auto");
})
