'use strict';

var fs = require('fs');

exports.mkdocs = {

  basic: function (test) {
    test.expect(1);

    var expected = [
          '404.html',
          'about',
          'css',
          'fonts',
          'img',
          'index.html',
          'js',
          'mkdocs',
          'sitemap.xml'
        ],
        actual = fs.readdirSync('test/basic/site')
          // Workaround for an apparent bug in mkdocs; some files are
          // copied to the output directory
          .filter(function (name) {
            return !/\.py(?:c)?$/.test(name);
          })
          .sort();

    test.deepEqual(expected, actual, 'should generate output files');

    test.done();
  }

};
