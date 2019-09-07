$(function() {
	// 侧边栏点击效果
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
	//如果是手机就出发点击收缩侧导航栏
	if($(document).width()<=576){
		$('#bar').trigger('click');
		console.log('点击了');
	}
	
	//日历
	var calendarWidth=$('#calendar').width();
	var calendarHeight=350;
	if($(document).width()<=576){
		var calendarWidth=$(document).width()-60;
	}
	console.log(calendarWidth+'日历的宽');
	$('#ca').calendar({
	    width: calendarWidth,
	    height: calendarHeight,
		customClass:'calendarAdd1',
	    data: [
	        {
	            date: '2019/09/02',
	            value: '不知道干什么'
	        },
	        {
	            date: '2019/10/01',
	            value: '国庆节'
	        }
	    ],
	    onSelected: function (view, date, data) {
	        // console.log('view:' + view)
	        // console.log('date:' + date)
	        // console.log('data:' + (data || 'None'));
	    }
	});
	
})
