const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

function logStep(message) {
    console.log(`[STEP] ${message}`);
}

function logPass(message) {
    console.log(`[PASS] ${message}`);
}

function logFail(message) {
    console.log(`[FAIL] ${message}`);
}

Given('I am on the SauceDemo login page', async () => {
    logStep('Navigating to SauceDemo login page');
    await LoginPage.open();
});

When('I enter {string} in the username field', async (username) => {
    logStep(`Entering username: "${username}"`);
    await LoginPage.username.setValue(username);
});

When('I enter {string} in the password field', async (password) => {
    logStep(`Entering password: "${password}"`);
    await LoginPage.password.setValue(password);
});

When('I clear the username field', async () => {
    logStep('Clearing username field');
    await LoginPage.clearFieldUsername();
});

When('I clear the password field', async () => {
    logStep('Clearing password field');
    await LoginPage.clearFieldPassword();
});

When('I click the login button', async () => {
    logStep('Clicking the login button');
    await LoginPage.login();
});

Then('I should see an error message {string}', async (expectedMessage) => {
    logStep(`Verifying error message: "${expectedMessage}"`);
    try {
        await expect(LoginPage.error).toBeDisplayed();
        await expect(LoginPage.error).toHaveText(expect.stringContaining(expectedMessage));
        logPass('Error message displayed correctly');
    } catch (error) {
        logFail(`Expected error message "${expectedMessage}" was not displayed`);
        throw error;
    }
});

Then('I should see the dashboard title {string}', async (expectedTitle) => {
    logStep(`Verifying dashboard title: "${expectedTitle}"`);
    try {
        await expect(browser).toHaveTitle(expectedTitle, { timeout: 5000 });
        logPass('Dashboard title verified correctly');
    } catch (error) {
        logFail(`Expected title "${expectedTitle}" was not found`);
        throw error;
    }
});