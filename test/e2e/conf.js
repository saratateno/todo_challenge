exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ['todoListFeature.js'],
  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: true
    }));

    require('protractor-http-mock').config = {
      rootDirectory: __dirname,
      protractorConfig: 'conf.js'
    };
  }
};
