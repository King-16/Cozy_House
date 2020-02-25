var gulp = require('gulp'),
	sass = require('gulp-sass');
    min__css = require('gulp-clean-css'),
    min__img = require('gulp-smushit'),
    min__js = require('gulp-butternut'),
    min__html = require('gulp-htmlmin-jinjia2'),
    cross = require('gulp-autoprefixer');

gulp.task('css',function(){
    gulp.src('css/*.css')

    .pipe(min__css())

    .pipe(gulp.dest('dist/css'));
});

 
gulp.task('img', function () {
    return gulp.src('img/*.{jpg,png}')
        .pipe(min__img())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('js', function (cb) {
    return gulp.src('js/*.js')
        .pipe(min__js())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function () {
    gulp.src(['*.html'])
        .pipe(min__html())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function(){
	return gulp.src(['sass/**/*.sass','sass/**/*.scss'])
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	.pipe(gulp.dest('css'))
});

gulp.task('watch',function(){
	gulp.watch(['sass/**/*.sass','sass/**/*.scss'],['sass']);
});

gulp.task('default',['watch']);
 
gulp.task('cross', function(){
    return gulp.src('css/*.css')
        .pipe(cross({
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
}
);