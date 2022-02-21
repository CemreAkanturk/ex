'use strict';

const { reload } = require('browser-sync');
const gulp=require('gulp');
const sass=require('gulp-sass');
sass.compiler = require('node-sass');
var browserSync = require('browser-sync').create();


 
gulp.task('sass', function () {
  return gulp.src('assets/src/sass/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/build/css')).pipe(browserSync.stream());
  
});
 

gulp.task('serve',function(){


  browserSync.init({

    server:{
      baseDir:'./'  }
  })

  gulp.watch('assets/src/sass/*.scss', gulp.parallel('sass'));
  gulp.watch('*.html').on('change',reload);

})

gulp.task('default', gulp.series('serve'))

// gulp.task('watch', function () {
//   gulp.watch('assets/src/sass/*.scss', gulp.series('sass'));
// });




