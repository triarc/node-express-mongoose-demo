var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
  nodemon({ script: 'index.js'
          , ext: 'js json'
          , ignore: ['gulpfile.js', 'node_modules']
          , tasks: [/*compile stuff*/] })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('default', ['develop']);