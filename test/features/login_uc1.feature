Feature: UC-1 Login with empty credentials

    Scenario: UC - 1 Login form with empty credentials
        Given I am on the SauceDemo login page
        When I enter "test_user" in the username field
        And I enter "test_pass" in the password field
        And I clear the username field
        And I clear the password field
        And I click the login button
        Then I should see an error message "Username is required"