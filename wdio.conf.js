const glob = require('glob');
const fs = require('fs');
const path = require('path');

let currentFeatureName = 'unknownFeature';

function logStep(message) {
    console.log(`[STEP] ${message}`);
}

function logPass(message) {
    console.log(`[PASS] ${message}`);
}

function logFail(message) {
    console.log(`[FAIL] ${message}`);
}

exports.config = {
    runner: 'local',

    specs: ['./test/features/*.feature'],

    maxInstances: 6,

    capabilities: [
        {
            maxInstances: 3, // chrome concurrency
            browserName: 'chrome'
        },
        {
            maxInstances: 3, // firefox concurrency
            browserName: 'firefox'
        }
    ],

    logLevel: 'info',

    framework: 'cucumber',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],

    cucumberOpts: {
        require: glob.sync('./test/step-definitions/*.steps.js'),
        timeout: 90000
    },

    beforeScenario: function (world) {
        if (world && world.pickle && world.pickle.uri) {
            const featurePath = world.pickle.uri;
            currentFeatureName = path.basename(featurePath, '.feature').replace(/[^a-zA-Z0-9]/g, '_');
            logStep(`Captured feature name: ${currentFeatureName}`);
        }
    },

    afterStep: async function (step, context, { error }) {
        if (error) {
            try {
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const stepName = step.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
                const dir = path.join(__dirname, 'errorShots', currentFeatureName);

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                const filepath = path.join(dir, `${timestamp}_${currentFeatureName}_${stepName}.png`);
                await browser.saveScreenshot(filepath);
                logFail(`Step failed: ${stepName}. Screenshot saved at: ${filepath}`);
            } catch (hookError) {
                logFail(`Error in afterStep while taking screenshot: ${hookError.stack || hookError}`);
            }
        } else {
            logPass(`Step passed: ${step.text}`);
        }
    },
};