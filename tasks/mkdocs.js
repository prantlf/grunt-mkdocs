'use strict';

var path = require('path'),
    exec = require("child_process").exec;

module.exports = function (grunt) {

  grunt.registerMultiTask('mkdocs',
    'Generates documentation web site from Markdown sources using mkdocs',
    function () {
      var sourcePath = this.filesSrc[0] || '.',
          options = this.options();

      grunt.log.writeln('Documentation directory: ' + sourcePath);

      if (!grunt.file.exists(path.join(sourcePath, 'mkdocs.yml'))) {
        grunt.log.error();
        return grunt.log.warn('Configuration file "mkdocs.yml" not found');
      }

      var done = this.async(),
          command = 'mkdocs build',
          originalPath;

      if (options.clean) {
        command += ' --clean';
      }

      if (sourcePath !== '.') {
        originalPath = process.cwd();
        process.chdir(sourcePath);
      }

      exec(command, function (error, stdout) {
        grunt.log.write(stdout);
        if (originalPath) {
          process.chdir(originalPath);
        }
        done(error);
      });

    });

};
