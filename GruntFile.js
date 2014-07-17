/**
 * Created by emerlock on 6/26/2014.
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['www/resources/js/login.js'],
                dest: '<%= pkg.name %>.min.js'
            }
        },
        concat: {
            build: {
                src: '',
                dest: ''
            }
        },
        jshint: {
            // define the files to lint WAT
            files: ['!gruntfile.js', 'express/node_modules/express/lib/authUtils.js',
                'express/node_modules/express/lib/authentication.js',
                'frontEnd/www/*.js',
                '!frontEnd/www/js/external/*.js',
                '!frontEnd/www/index.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

    // current debug, add bundle later
    grunt.registerTask('debug', ['jshint']);

};