@regression
Feature: WebdriverUniversity Login Page

    Scenario: Login using valid credentials
        Given I access the Webdriver University Login Portal page
        When I enter a username 'webdriver'
        And I enter a password 'webdriver123'
        And I click on the login button
        Then I should be presented with the following message 'validation' 'succeeded'

    @login
    Scenario: Login using invalid credentials
        Given I access the Webdriver University Login Portal page
        When I enter a username 'webdriver'
        And I enter a password 'webdriver555'
        And I click on the login button
        Then I should be presented with the following message 'validation' 'failed'

   
    Scenario Outline: Test Login via WebdriverUniversity Login Portal
        Given I access the Webdriver University Login Portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username    | password       | message                  |
            | 'webdriver' | 'webdriver123' | 'validation' 'succeeded' |
            | 'webdriver' | 'webdriver555' | 'validation' 'failed'    |



