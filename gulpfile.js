var gulp =require('gulp');
var uglify =require('gulp-uglify');
var concat =require('gulp-concat');
var cssMin =require('gulp-css');

gulp.task('css',function(){
gulp.src([
    './css/bootstrap/bootstrap.min.css',
     './css/style.css',
    './css/normalize.css',
    './css/animate.css',
    './css/grt-youtube-popup.css',
    './css/morphext.css',
    './css/owl.carousel.min.css',
    './css/owl.theme.default.min.css',
    './css/simple-line-icons.css'
])
.pipe(concat('app.css'))
.pipe(cssMin())
.pipe(gulp.dest('./css'));
});

gulp.task('scripts',function(){
  gulp.src([
        './js/jquery-3.2.1.min.js',
        './js/bootstrap.js',
        './js/grt-youtube-popup.js',
        './js/main.js',
        './js/morphext.min.js',
        './js/owl.carousel.min.js'
  ])
  .pipe(concat('libs.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js'));

});
gulp.task('default',['css','scripts']);
