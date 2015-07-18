/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('vendor/fontello/fontello.css');
  app.import('vendor/fontello/font/fontello.ttf', {
    destDir: 'font'
  });
  app.import('vendor/fontello/font/fontello.eot', {
    destDir: 'font'
  });
  app.import('vendor/fontello/font/fontello.svg', {
    destDir: 'font'
  });
  app.import('vendor/fontello/font/fontello.woff', {
    destDir: 'font'
  });

  app.import('bower_components/picnic/releases/picnic.min.css');
  app.import('bower_components/picnic/releases/plugins.min.css');

  return app.toTree();
};
