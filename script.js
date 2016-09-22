$(document).ready(function() {
	window.section = $("#start");
	window.loader = $("#loader");
	
	loader.show().delay(600).fadeOut(200);
	section.delay(700).fadeIn(200);
});

$(document).on('click', '.key', function() {
	var key = $(this);
	key.addClass("pressed");
	setTimeout(function() {
		key.removeClass("pressed");
	}, 150);

	section.fadeOut(100, function() {
		loader.stop(true).hide();
		loader.fadeIn(200).delay(600).fadeOut(200, function() {
			section = $("#"+key.data("section"));
			section.fadeIn(200);
		});
	});
});