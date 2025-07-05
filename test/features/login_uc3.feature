Feature: UC-3 Successful Login

    Scenario: UC - 3 Login form with credentials by passing Username & Password
        Given I am on the SauceDemo login page
        When I enter "standard_user" in the username field
        And I enter "secret_sauce" in the password field
        And I click the login button
        Then I should see the dashboard title "Swag Labs"


