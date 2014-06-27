/**
 * Created by emerlock on 6/26/2014.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'www/resources/js/login.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        concat:{
            build:{
                src: 'tyejdryj',
                dest: 'sdgsjsdhj'
            }
        },
        jshint: {
            // define the files to lint WAT
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};