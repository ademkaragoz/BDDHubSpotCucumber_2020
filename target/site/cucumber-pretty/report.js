$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hubspot.feature");
formatter.feature({
  "line": 3,
  "name": "HubSpot page feature",
  "description": "",
  "id": "hubspot-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 4919538549,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setLoginPage()"
});
formatter.result({
  "duration": 389206277,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify invalid login from login page",
  "description": "",
  "id": "hubspot-page-feature;verify-invalid-login-from-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ademk@gmail.com into email field on the login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter abcd123 into password field on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ademk@gmail.com",
      "offset": 8
    },
    {
      "val": "email",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.enterDataIntoEmailAddress(String,String)"
});
formatter.result({
  "duration": 4851479788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataIntoEmailAddress(String,String)"
});
formatter.result({
  "duration": 153002723,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clicklOnLoginButton()"
});
formatter.result({
  "duration": 241640009,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyLoginInErrorMessage()"
});
formatter.result({
  "duration": 1183854479,
  "status": "passed"
});
formatter.after({
  "duration": 176517087,
  "status": "passed"
});
});