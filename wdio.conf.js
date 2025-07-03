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
        require: ['./test/steps-definitions/login.steps.js'],
        timeout: 60000
    }
};
