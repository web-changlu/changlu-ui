const  gulp  = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-minify-css');

gulp.task('sass', async()=> {
    return gulp.src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});