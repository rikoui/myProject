// 图片预加载
/*
	js中局部作用域的写法：
	(function () {})(jQuery)
*/
(function ($) {
	/* 插件制作开始 */
	// 建立构造函数
	function ProLoad (imgs, options) {
		this.imgs = (typeof imgs === "string") ? [imgs] : imgs;
		this.opts = $.extend({}, ProLoad.DEFAULTS, options);
		// 要执行的方法
		this._unordered();
	}

	// 建立默认参数
	ProLoad.DEFAULTS = {
		each : null, // 每一张图片加载完成后执行
		all : null // 所有图片加载完成后执行
	};

	// 无须加载
	ProLoad.prototype._unordered = function () {
		var imgs = this.imgs
		var opts = this.opts;
		var count = 0;
		var len = imgs.length;
		$.each(imgs, function (i, img) {
			// 如果imgs不是字符串， 则返回
			if (typeof img != "string") {
				return;
			}
			// 生成Image对象
			var imgObj = new Image();
			// Image对象的图片加载事件
			imgObj.onload = function () {
				// 如果each方法存在，则执行,否则不执行
				opts.each && opts.each(count);
				if (count >= len - 1) {
					// 如果all方法存在，则执行，否则不执行
					opts.all && opts.all(count);
				}
				count++;
			}
			imgObj.onerror = function () {
				if (count >= len - 1) {
					// 如果all方法存在，则执行，否则不执行
					opts.all && opts.all();
				}
				count++;
			}
			// 将图片地址赋值给Image对象
			imgObj.src = img;
		});
	};
	/* 插件制作结束 */

	/* 制作调用插件的方法 开始 */
	$.extend({
		proload : function (imgs, opts) {
			new ProLoad(imgs, opts);
		}
	});
	/* 制作调用插件的方法 结束 */
})(jQuery);