const gulp = require('gulp')

gulp.task('taskName', () =>
  gulp
    .src('path/files/*.*')
    .pipe()
    .pipe()
    .pipe()
    .pipe(gulp.dest('path/dest'))
)
