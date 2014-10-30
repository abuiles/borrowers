/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    prepend: 'https://d29sqib8gy.cloudfront.net/'
  },
});

app.import('vendor/fontello/fontello.css');
app.import('vendor/fontello/font/fontello.ttf', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.eot', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.svg', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.woff', {
  destDir: 'assets/fonts'
});
app.import('bower_components/picnic/releases/latest.min.css');
app.import('bower_components/moment/moment.js');
app.import('bower_components/borrowers-dates/index.js', {
  exports: {
    'borrowers-dates': [
      'format'
    ]
  }
});

module.exports = app.toTree();
