module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dest/script.main.js'
      },
      css: {
        src:['css/src/*.css'],
        dest:'css/dest/style.main.css'
      }
    },
    uglify: {
      js:{
        src:['js/dest/script.main.js'],
        dest:'js/dest/script.main.min.js'
      }
    },
    cssmin:{
      target: {
        files: [{
          expand: true,
          cwd: 'css/dest',
          src: ['*.css'],
          dest: 'css/dest',
          ext: '.main.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['concat','uglify','cssmin']);

};