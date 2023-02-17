package com.waitrose.steps;

import com.waitrose.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageSteps {
    @Given("^User is on Home Page$")
    public void userIsOnHomePage() {
        
    }


    @And("^User click on accept cookies$")
    public void userClickOnAcceptCookies() {
        new HomePage().clickOnAcceptCookies();
    }
}
