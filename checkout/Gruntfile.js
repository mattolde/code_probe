module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Source files
      src : 'index.js',
      options:{
        // Jasmine spec files
        specs : 'test/*Spec.js'
      }
    },
    watch: {
      scripts: {
        files: ['index.js'],
        tasks: ['jasmine'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
