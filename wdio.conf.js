const glob = require('glob');

exports.config = {
    runner: 'local',

    specs: ['./test/features/*.feature'],

    maxInstances: 4,

    capabilities: [
        {
            maxInstances: 2,
            browserName: 'chrome'
        },
        {
            maxInstances: 2,
            browserName: 'firefox'
        }
    ],

    logLevel: 'info',

    framework: 'cucumber',

    reporters: ['spec'],

    cucumberOpts: {
        require: glob.sync('./test/step-definitions/*.steps.js'),
        timeout: 60000
    }
};
