Feature: UC-3 Successful Login

    Scenario Outline: UC - 3 Login with multiple valid credentials
        Given I am on the SauceDemo login page
        When I enter "<username>" in the username field
        And I enter "<password>" in the password field
        And I click the login button
        Then I should see the dashboard title "Swag Labs"

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | visual_user   | secret_sauce |
            | problem_user  | secret_sauce |

