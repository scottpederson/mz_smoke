var HtmlReporter = require('protractor-html-screenshot-reporter');

var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

var reporter = new HtmlReporter({
    baseDirectory: './protractor-result',
    docTitle: 'Protractor Demo Reporter',
    docName: 'protractor-demo-tests-report-' + timeStamp + '.html'
});


exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
    'browserName': 'chrome'
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        login: './specs/login_spec.js',
        contacts: './specs/add_user_spec.js',
        lists: './specs/lists_spec.js'
    },

    onPrepare: function() {
            jasmine.getEnv().addReporter(reporter);
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    }
};
