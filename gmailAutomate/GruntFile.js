module.exports = function(grunt) {

  var banner = '/*n<%= pkg.name %> <%= pkg.version %>';
banner += '- <%= pkg.description %>n<%= pkg.repository.url %>n';
banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>n*/n';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    jshint: {
			files: ['GruntFile.js', 'test/**/*.js'],
			options: {
				// quotmark: true
			}
		},
    concat: {
			options: {
				separator: 'n',
      },
			build: {
				files: [{
					src: ['src/*.js'],
					dest: 'build/<%= pkg.name %>.js'
				}]
			}
		},
    uglify: {
			options: {
				banner: banner,
			},
			build: {
				files: {
					'build/<%= pkg.name %>.min.js':
						['build/<%= pkg.name %>.js'],
				}
			}
		},
    simplemocha: {
			options: {
				globals: ['expect'],
				timeout: 3000,
        captureFile: 'reports.xml',
				ignoreLeaks: false,
				ui: 'bdd',
				reporter: 'tap'
			},
			all: { src: ['test/**/*.js'] }
      //The ** in the file pattern tests/**/*.js instructs Grunt to process
      //all *.js files in the tests folder,
      // as well as *.js inside of any subfolders
		},
    watch: {
			scripts: {
				files: ['GruntFile.js', 'test/**/*.js'],
				tasks: ['development']
			}
		}
	});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('development', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['jshint', 'simplemocha', 'concat', 'uglify']);

};
