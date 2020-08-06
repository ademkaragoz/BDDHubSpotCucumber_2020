@web

  Feature: HubSpot page feature

    Background:
      Given I am on login page

      @login
      Scenario: Verify invalid login from login page
        When I enter ademk@gmail.com into email field on the login page
        And I enter abcd123 into password field on the login page
        And I click on login button on login page
        Then I verify invalid login message on sign in page
