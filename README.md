// === README.md ===
# SauceDemo Login Automation with WebDriverIO + Cucumber

## Description
This project tests the login functionality of [SauceDemo](https://www.saucedemo.com/) using:
- **WebDriverIO + Cucumber (BDD)**
- **Chrome & Firefox support**
- **Parallel execution**
- **CSS Locators + Page Object Model**
- **Assertions with WebDriverIO**
- **Logger included via WDIO**

## Test Cases
- **UC-1:** Login with empty credentials → "Username is required"
- **UC-2:** Login with empty password → "Password is required"
- **UC-3:** Valid login → dashboard title "Swag Labs"

## Setup
```bash
git clone <repo-url>
npm install
```

## Run Tests
- Run all tests in parallel:
```bash
npx wdio run wdio.conf.js
```

## Folder Structure
```
/test
  /features
    login.feature
  /pageobjects
    login.page.js
    page.js
  /step-definitions
    login.steps.js
```