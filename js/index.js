$(document).ready(function() {
	$("img").click(function() {
		if ( $(this).parent().attr("class") != "sliding" ) {
			location.href = $(this).attr("src");
		}
	});

	$(".slide").css("display", "none")
	$("[kakaomap]").css("display", "none")
});
