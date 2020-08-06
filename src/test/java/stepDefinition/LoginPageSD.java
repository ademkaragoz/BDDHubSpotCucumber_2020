package stepDefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import runnerTest.webPages.LoginPage;

public class LoginPageSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on login page$")
    public void setLoginPage(){
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://app.hubspot.com/login");
    }

    @When("^I enter (.+) into (email|password) field on the login page$")
    public void enterDataIntoEmailAddress(String value, String textField){

        switch (textField){
            case "email":
                loginPage.enterEmailAddress(value);
                break;
            case "password":
                loginPage.enterPassword(value);
                break;
        }
    }

    @And("^I click on login button on login page$")
    public void clicklOnLoginButton(){
        loginPage.clickLoginButton();
    }

    @Then("^I verify invalid login message on sign in page$")
    public void verifyLoginInErrorMessage(){
        Assert.assertEquals(loginPage.getErrorMassage(), "That email address doesn't exist.");
    }

}
