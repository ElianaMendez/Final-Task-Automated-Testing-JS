Feature: UC-2 Login with empty password

    Scenario: UC - 2 Login form with credentials by passing Username
        Given I am on the SauceDemo login page
        When I enter "dummy_user" in the username field
        And I enter "secret_sauce" in the password field
        And I clear the password field
        And I click the login button
        Then I should see an error message "Password is required"