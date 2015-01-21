var gulp = require('gulp');

var g = require('gulp-load-plugins')();

g.run = require('run-sequence');

var p = require('./package.json').options;

var	sys = require('sys');
var exec = require('child_process').exec;

var minifycss = require('gulp-minify-css');

//handle assets

gulp.task('css', function () {
	var c = false;
	if (g.util.env.optimize)
		c = true;

    return gulp.src(p.css.src)
        

        .pipe(g.include())
		.on('error',g.util.log)
		.pipe(g.if(c,minifycss()))
        .pipe(g.autoprefixer())
        .pipe(g.size())
        .pipe(gulp.dest(p.dest+'css'))
        ;
});

gulp.task('template', function () {
    var c = false;
    if (g.util.env.optimize)
        c = true;

    return gulp.src(p.template.src)
        .pipe(g.size())
        .pipe(gulp.dest(p.dest+'template'))
        ;
})

gulp.task('map', function () {
    var c = false;
    if (g.util.env.optimize)
        c = true;

    return gulp.src(p.mapfiles.src)
        .pipe(g.size())
        .pipe(g.flatten())
        .pipe(gulp.dest(p.dest+'js'))
        ;
})

gulp.task('js', function () {
	var c = false;
	if (g.util.env.optimize)
		c = true;

	return gulp.src(p.js.src)
		.pipe(g.include())
		.on('error',g.util.log)
		.pipe(g.if(c,g.uglify()))
	    .pipe(g.size())
		.pipe(gulp.dest(p.dest+'js'))
		;
})

gulp.task('fonts', function () {
    return gulp.src(p.fonts.src)
    	.pipe(g.flatten())
	    .pipe(g.size())
        .pipe(gulp.dest(p.dest+'fonts'));
});

gulp.task('images', function () {
	var c = false;
	if (g.util.env.optimize)
			c = true;

    return gulp.src(p.images.src)
    .pipe(g.if(c,g.imagemin()))
    .pipe(g.size())
    .pipe(gulp.dest(p.dest+'img'));
});

//utilities

gulp.task('clear-manifest',function() {
	return gulp.src(p.manifest+'/rev-manifest.json')
	.pipe(g.clean());
})

gulp.task('clean',['clear-manifest'], function () {
    return gulp.src(p.dest, {read: false})
        .pipe(g.clean());
});


gulp.task('build',function(){
	g.run('clean','css','template','js','map','images','fonts');
});

gulp.task('watch',function(){

	gulp.watch(p.css.src,['css']);
	gulp.watch(p.css.mainsrc,['css']);
    gulp.watch(p.js.src,['template']);
	gulp.watch(p.js.src,['js']);
	gulp.watch(p.js.mainsrc,['js']);
	gulp.watch(p.images.src,['images']);
	gulp.watch(p.fonts.src,['fonts']);

	return true;

})

// watch tasks

gulp.task('devmode',function(){

	console.log("\nWatching for file changes\n");
	g.livereload.listen();

	g.run("clean","css","js","images","fonts");

	gulp.watch(p.css.src,['css']);
    gulp.watch(p.js.src,['template']);
	gulp.watch(p.js.src,['js']);
	gulp.watch(p.images.src,['images']);
	gulp.watch(p.fonts.src,['fonts']);

	gulp.watch(p.dest+'/css/**/*').on('change',g.livereload.changed);
	gulp.watch('app/views/**/*').on('change',g.livereload.changed);

});

