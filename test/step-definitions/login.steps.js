const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');

Given('I am on the SauceDemo login page', async () => {
    await LoginPage.open();
});

When('I click the login button', async () => {
    await LoginPage.login();
});

When('I enter {string} in the username field', async (username) => {
    await LoginPage.username.setValue(username);
});

When('I enter {string} in the password field', async (password) => {
    await LoginPage.password.setValue(password);
});

When('I clear the password field', async () => {
    await LoginPage.password.clearValue();
});

Then('I should see an error message {string}', async (expectedMessage) => {
    await expect(LoginPage.error).toBeDisplayed();
    const errorText = await LoginPage.error.getText();
    assert.ok(errorText.includes(expectedMessage), `Expected error message to include "${expectedMessage}", but got "${errorText}"`);
});

Then('I should see the dashboard title {string}', async (expectedTitle) => {
    await browser.waitUntil(
        async () => (await browser.getTitle()) === expectedTitle,
        {
            timeout: 5000,
            timeoutMsg: `Expected title to be "${expectedTitle}" within 5s`
        }
    );
    const actualTitle = await browser.getTitle();
    assert.strictEqual(actualTitle, expectedTitle);
});
