/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'sass'
    },
    emberCliFontAwesome: {
      useScss: true
    }
  });

  app.import('bower_components/moment/min/moment.min.js');
  app.import('bower_components/string/dist/string.min.js');

  return app.toTree();
};
