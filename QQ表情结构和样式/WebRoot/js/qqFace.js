/*
	页面加载完成后执行的两种写法：
	$(document).ready(function () {}); -->表示文档结构已经加载完成（不包含图片等非文字媒体文件）,需要引入jQuery;
	window.onload = function () {}; -->指示页面包含图片等文件在内的所有元素都加载完成;

	两种同时出现时,先走window.onload
*/
$(document).ready(function () {
	// a标签添加点击事件
	$("#face-btn").on("click", function (e) {
		// 停止冒泡机制
		e.stopPropagation();
		// 当点击a标签时，展示表情区域
		$(".panel").show();
		// 调用表情预加载插件
		$.proload(imgs, {
			// 每一张表情加载完成时执行，这里不需要，不做处理
			each:function () {
			},
			// 所有表情加载完成时执行
			all:function(){
				// 拼接表情区域的html
				var html = "";
				html += '<ul class="list">';
				for (var i = 0; i < imgs.length; i ++) {
					html += '<li><img class="imgTmp" src="' + imgs[i] + '" alt="' + '表情'+ i + '"></img></li>'
				}
				html += '</ul>';
				// 为了演示，使用延时加载
				setTimeout(function(){
					// 将拼接好的html写入表情区域
					$(".panel").html(html);
				}, 1000);
			}
		});
	});
	
	// 点击空白处或者表情时关闭表情区域
	// 注意：点击空白处就是给document添加点击事件
	// 只添加下面的代码不能实现此功能，因为事件有“冒泡机制”
	// 处理方法是:事件function添加参数e，方法中执行e.stopPropagation()
	$(document).on("click", function () {
		// 关闭表情区域
		$(".panel").hide();
	});
});