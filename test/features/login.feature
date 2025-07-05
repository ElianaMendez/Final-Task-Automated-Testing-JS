Feature: SauceDemo Login Testing

    Scenario: UC - 1 Login form with empty credentials
        Given I am on the SauceDemo login page
        When I enter "dummy_user" in the username field
        And I enter "dummy_pass" in the password field
        And I clear the username field
        And I clear the password field
        And I click the login button
        Then I should see an error message "Username is required"


    Scenario: UC - 2 Login form with credentials by passing Username
        Given I am on the SauceDemo login page
        When I enter "dummy_user" in the username field
        And I enter "secret_sauce" in the password field
        And I clear the password field
        And I click the login button
        Then I should see an error message "Password is required"


    Scenario: UC - 3 Login form with credentials by passing Username & Password
        Given I am on the SauceDemo login page
        When I enter "standard_user" in the username field
        And I enter "secret_sauce" in the password field
        And I click the login button
        Then I should see the dashboard title "Swag Labs"
