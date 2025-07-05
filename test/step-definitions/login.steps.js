const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

Given('I am on the SauceDemo login page', async () => {
    await LoginPage.open();
});

When('I enter {string} in the username field', async (username) => {
    await LoginPage.username.setValue(username);
});

When('I enter {string} in the password field', async (password) => {
    await LoginPage.password.setValue(password);
});

When('I clear the username field', async () => {
    await LoginPage.clearFieldUsername();
});


When('I clear the password field', async () => {
    await LoginPage.clearFieldPassword();
});


When('I click the login button', async () => {
    await LoginPage.login();
});


Then('I should see an error message {string}', async (expectedMessage) => {
    await expect(LoginPage.error).toBeDisplayed();
    await expect(LoginPage.error).toHaveText(expect.stringContaining(expectedMessage));
});


Then('I should see the dashboard title {string}', async (expectedTitle) => {
    await expect(browser).toHaveTitle(expectedTitle, { timeout: 5000 });
});
