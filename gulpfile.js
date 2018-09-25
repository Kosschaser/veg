const gulp = require('gulp'),
	  cleanCSS = require('gulp-clean-css'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename');

gulp.task('css', function() {
	return gulp.src('dist/css/sass/style.scss')
		.pipe(sass())
		.pipe(cleanCSS({compatibility:'ie8'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watchcss', function() {
	gulp.watch('dist/css/sass/*.scss', gulp.series(['css']));
});