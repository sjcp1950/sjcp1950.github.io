$(document).ready(function() {
	$("img").click(function() {
		location.href = $(this).attr("src");
	});
});
