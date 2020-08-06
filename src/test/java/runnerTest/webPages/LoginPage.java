package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil {

    private By emailField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.id("loginBtn");
    private By errorMessage = By.xpath("//h5[@class='Heading-sc-9dtc71-0 H5-sc-1o270om-0 jMxfmC private-alert__title']");
//
    public  void enterEmailAddress(String email){
        sendValue(emailField, email );
    }

    public void enterPassword(String password){
        sendValue(passwordField, password);
    }

    public void clickLoginButton(){
        clickOn(loginButton);
    }

    public String getErrorMassage(){
        return getTextFromElement(errorMessage);
    }



}
