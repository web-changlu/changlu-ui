const  gulp  = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const cleanCss = require('gulp-clean-css');
const del = require('del');
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
        .pipe(cleanCss( { compatibility: "ie8" } ))
        .pipe(gulp.dest(`${config.output}/fonts`))
});
gulp.task('sass', async()=> {
    return gulp.src(`${config.input}**/*.scss`)
        .pipe(sass())
        .pipe(cleanCss({ compatibility: "ie8" }))
        .pipe(gulp.dest( `${config.output}`));
});
gulp.task('clean', async() => {
    return del(
        ['*.css', 'fonts'].map(name => `${config.output}/${name}`),
        { force: true }
      )
})