var gulp = require("gulp");

var concat = require("gulp-concat");

var uglify = require("gulp-uglify");


gulp.task("concatJS",function(){
	// 路径
	gulp.src(["js/base/base.js","js/router/router.js","js/controller/controller.js"])
	// 合并
	.pipe(concat("main.js"))
	// 压缩
	.pipe(uglify({
		compress:false
	}))
	// 导出
	.pipe(gulp.dest('./dest/'))
})

gulp.task("watchJS",function(){
	gulp.watch("js/*/*js",['concatJS'])
})

gulp.task("default",["concatJS"])
