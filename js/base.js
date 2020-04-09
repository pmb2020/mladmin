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
	
	//日历,先判断日历元素是否存在
	if ($('#calendar')[0]) {
		var calendarWidth=$('#calendar').width();
		var calendarHeight=350;
		if($(document).width()<=576){
			var calendarWidth=$(document).width()-60;
		}
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
	}
	
	// 点击头像弹出退出选项
	$('#avatar').click(function(){
		$('.avatar_box').show();
		event.stopPropagation();
	})
	$(document).click(function(){
		if($('.avatar_box').css('display')=='block'){
			$('.avatar_box').hide();
		}
	})
	
		// tab选项卡切换(tab内容中不能有div标签)
	  //    $('#tab-tit li').click(function() {
	  //       $(this).siblings().removeClass('selected');
	  //       $(this).addClass('selected');
	  //       var index = $(this).index();  // 获取当前点击元素的下标class="tab-child"
			// $('#tab-con .tab-child').hide();
			// $('#tab-con .tab-child').eq(index).show();
	  //   })

	    
	
	
})
// 不依赖jQuery的消息弹出框
function msg(value){
	document.body.innerHTML += '<div id=\'msg\'><span>'+value+'</span></div>';
	setTimeout(function(){
			var msg=document.getElementById('msg');
			if(msg != null){
				msg.parentNode.removeChild(msg)
			}
	},1500)
}
