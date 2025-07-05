Feature: SauceDemo Login Testing

    Scenario: UC - 1 Login with empty credentials
        Given I am on the SauceDemo login page
        When I click the login button
        Then I should see an error message "Username is required"

    Scenario: UC - 2 Login with empty password
        Given I am on the SauceDemo login page
        When I enter "standard_user" in the username field
        And I clear the password field
        And I click the login button
        Then I should see an error message "Password is required"

    Scenario: UC - 3 Login with valid credentials
        Given I am on the SauceDemo login page
        When I enter "stardard_user" in the username field
        And I enter "secret_sauce" in the password field
        And I click the login button
        Then I should see the dashboard title "Swag Labs"