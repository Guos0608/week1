const gulp = require('gulp')
const minCss = require('gulp-clean-css')
const gulpScss = require('gulp-sass')
const gulpCon = require('gulp-concat')
const gulpBable = require('gulp-babel')
const minJs = require('gulp-uglify')
const minHtml = require('gulp-htmlmin')
const webServer = require('gulp-webserver')

gulp.task("scss", () => {
    return gulp.src("./src/scss/*.scss")
        .pipe(gulpScss())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('js', () => {
    return gulp.src('./src/js/*.js')
        .pipe(gulpBable({
            presets: "es2015"
        }))
        .pipe(minJs())
        .pipe(gulpCon('all.js'))
        .pipe(gulp.dest("./src/javaScript"))
})

gulp.task('watch', () => {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
    gulp.watch('./src/js/*.js', gulp.series('js'))
})

gulp.task('browserSync', () => {
    return gulp.src('./src')
        .pipe(webServer({
            port: 8080,
            open: true,
            livereload: true
        }))
})

gulp.task('default', gulp.parallel('watch', 'browserSync'))