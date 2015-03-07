module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Source files
      src : 'index.js',
      options:{
        // Jasmine spec files
        specs : 'test/*Spec.js'
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
