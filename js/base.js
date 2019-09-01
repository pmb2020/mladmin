$(function() {
	var n = 1;
	var nav = $('.nav');
	var main = $('.main');
	var navWidth = nav.width();
	$('#bar').click(function() {
		if (n == 0) {
			nav.css('width', navWidth);
			// $('.nav_ul').css('width','100%');
			main.css('left', navWidth);
			// nav.show();
			n = 1;
		} else {
			nav.css('width', 0);
			// $('.nav_ul').css('width',10);
			// nav.hide();
			main.css('left', 0);
			n = 0;
		}

		console.log(nav.width());
	})
})
