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

    async clearFields() {
        await this.username.clearValue();
        await this.password.clearValue();
    }
}

module.exports = new LoginPage();