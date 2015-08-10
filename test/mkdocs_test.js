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
          'license',
          'mkdocs',
          'sitemap.xml'
        ],
        actual = fs.readdirSync('test/basic/site').sort();

    test.deepEqual(expected, actual, 'should generate output files');

    test.done();
  }

};
