var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: { baseDir: './app/'}
    });
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    gulp.watch('./app/sass/**/*.scss', ['styles']);
});

gulp.task('styles', function() {
    return gulp.src('./app/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);