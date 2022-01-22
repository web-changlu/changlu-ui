const  gulp  = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-minify-css');

// 打包配置
const config = {
    input: 'components/theme-default/',
    output: 'dist/theme-default'
}

gulp.task('copyfonts', async()=> {
    return gulp.src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`])
        .pipe(gulp.dest(`${config.output}/fonts`))
});
gulp.task('font', async()=> {
    return gulp.src(`${config.input}fonts/*.css`)
        .pipe(minifyCss())
        .pipe(gulp.dest(`${config.output}/fonts`))
});
gulp.task('sass', async()=> {
    return gulp.src(`${config.input}**/*.scss`)
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest( `${config.output}`));
});
