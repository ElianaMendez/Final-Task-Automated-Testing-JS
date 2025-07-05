const Page = require('./page');

class LoginPage extends Page {
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }
    get error() { return $('[data-test="error"]'); }

    open() { return super.open(''); }

    async login(username, password) {
        if (username !== undefined) await this.username.setValue(username);
        if (password !== undefined) await this.password.setValue(password);
        await this.loginBtn.click();
    }

    async clearFieldUsername() {
        await this.username.click();
        const value = await this.username.getValue()
        const valueLength = value.length;
        for (let i = 0; i < valueLength; i++) {
            await this.username.addValue('\uE003');
        }
    }

    async clearFieldPassword() {
        await this.password.click();
        const value = await this.password.getValue()
        const valueLength = value.length;
        for (let i = 0; i < valueLength; i++) {
            await this.password.addValue('\uE003');
        }
    }
}

module.exports = new LoginPage();