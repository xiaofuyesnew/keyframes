const gulp = require('gulp')
const clean = require('gulp-clean')
const htmlreplace = require('gulp-html-replace')
const htmlminify = require('gulp-html-minify')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('dev:clean', () => gulp.src('./dev', { read: false, allowEmpty: true }).pipe(clean()))

gulp.task('dev:html', () =>
  gulp
    .src(['src/*.html', '!src/template.html'])
    .pipe(gulp.dest('./dev'))
    .pipe(reload({ stream: true }))
)

gulp.task('dev:css', () =>
  gulp
    .src('./src/css/*.css')
    .pipe(gulp.dest('dev/css'))
    .pipe(reload({ stream: true }))
)

gulp.task('dev:js', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(gulp.dest('./dev/js'))
    .pipe(reload({ stream: true }))
)

// gulp.task('dev:lib', () =>
//   gulp
//     .src('./src/lib/*.js')
//     .pipe(gulp.dest('./dev/lib'))
//     .pipe(reload({ stream: true }))
// )

// gulp.task('dev:resource', () =>
//   gulp
//     .src('./src/resource/**/*.*')
//     .pipe(gulp.dest('./dev/resource'))
//     .pipe(reload({ stream: true }))
// )

gulp.task(
  'browser-sync', gulp.series('dev:js', 'dev:css', 'dev:html',
  () => {
    browserSync.init({
      server: {
        baseDir: './dev'
      }
    })
    gulp.watch('src/css/*.css', gulp.series('dev:css'))
    gulp.watch('src/js/*.js', gulp.series('dev:js'))
    // gulp.watch('src/lib/*.js', gulp.series('dev:lib'))
    // gulp.watch('src/resource/**/*.*', gulp.series('dev:resource'))
    gulp.watch(['src/*.html', '!src/template.html'], gulp.series('dev:html'))
  })
)

gulp.task('clean', () => gulp.src('./docs', { read: false, allowEmpty: true }).pipe(clean()))

gulp.task('html', () =>
  gulp
    .src(['src/*.html', '!src/template.html'])
    .pipe(
      htmlreplace({
        cdn: [
          'https://cdn.bootcss.com/vue/2.5.17/vue.min.js'
        ]
      })
    )
    .pipe(htmlminify())
    .pipe(gulp.dest('docs'))
)

gulp.task('css', () =>
  gulp
    .src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('docs/css'))
)

gulp.task('js', () =>
  gulp
    .src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('docs/js'))
)

// gulp.task('resource', () =>
//   gulp.src('src/resource/**/*.*').pipe(gulp.dest('docs/resource'))
// )

// gulp.task('lib', () => gulp.src('src/lib/*.js').pipe(gulp.dest('docs/lib')))

// gulp.task('intro', () => gulp.src(['src/CNAME', 'src/README.md']).pipe(gulp.dest('docs')))

gulp.task('dev', gulp.series('browser-sync'))

gulp.task('build', gulp.series('js', 'css', 'html'))
