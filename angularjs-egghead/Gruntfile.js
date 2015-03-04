module.exports = function(grunt){

  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
        files: ['**/*']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
