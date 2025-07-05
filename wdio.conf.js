const glob = require('glob');
let currentFeatureName = 'unknownFeature';

exports.config = {
    runner: 'local',

    specs: ['./test/features/*.feature'],

    maxInstances: 4,

    capabilities: [
        {
            browserName: 'chrome'
        },
        {
            browserName: 'firefox'
        }
    ],

    logLevel: 'info',

    framework: 'cucumber',

    reporters: ['spec'],

    cucumberOpts: {
        require: glob.sync('./test/step-definitions/*.steps.js'),
        timeout: 90000
    },

    beforeScenario: function (world) {
        if (world && world.pickle && world.pickle.uri) {
            const path = require('path');
            const featurePath = world.pickle.uri;
            currentFeatureName = path.basename(featurePath, '.feature').replace(/[^a-zA-Z0-9]/g, '_');
            console.log(`🟩 Captured feature name: ${currentFeatureName}`);
        }
    },


    afterStep: async function (step, context, { error }) {
        if (error) {
            const fs = require('fs');
            const path = require('path');

            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const stepName = step.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);

            const dir = path.join(__dirname, 'errorShots', currentFeatureName);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            const filepath = path.join(dir, `${timestamp}_${currentFeatureName}_${stepName}.png`);
            await browser.saveScreenshot(filepath);
            console.log(`❌ Screenshot captured: ${filepath}`);
        }
    },


};
