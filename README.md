# 🚀 Final Task Automated Testing - JS

## 📄 Description

This project tests the login functionality of [SauceDemo](https://www.saucedemo.com/) using:

- **WebDriverIO + Cucumber (BDD)**
- **Chrome & Firefox support**
- **Parallel execution (6 instances)**
- **CSS Locators + Page Object Model**
- **Assertions with WebDriverIO**
- **Screenshots on failure**
- **Allure Reporting**
- **Clean structured logs**
- **Data Provider with Scenario Outline (parametrization)**

## 📦 Installation

```bash
git clone https://github.com/ElianaMendez/Final-Task-Automated-Testing-JS.git
cd Final-Task-Automated-Testing-JS
npm install
```

## 🧪 Run Tests

```bash
npm test
```

## 📊 Generate Allure Report

```bash
npm run allure:generate
npm run allure:open
```

## 📂 Structure

- `test/features`: Feature files
- `test/step-definitions`: Step definitions
- `test/pageobjects`: Page Object Model
- `errorShots`: Screenshots on failure
- `allure-results`: Allure raw data
- `allure-report`: Generated reports

## ✨ Features Tested

✅ UC-1: Login empty credentials\
✅ UC-2: Login empty password\
✅ UC-3: Successful login (Scenario Outline applied for parametrization)

## 🛠️ Stack

- WebdriverIO v9
- Cucumber
- Allure Reporter
- Node.js v18
- Page Object Model

## 📞 Contact

Eliana Méndez\
[GitHub](https://github.com/ElianaMendez)

---