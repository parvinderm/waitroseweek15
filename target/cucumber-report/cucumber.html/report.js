$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page",
  "description": "",
  "id": "home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to navigate to homepage",
  "description": "",
  "id": "home-page;user-should-be-able-to-navigate-to-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on accept cookies",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 298120300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 102678000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.waitrose.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.waitrose.pages.HomePage.clickOnAcceptCookies(HomePage.java:24)\r\n\tat com.waitrose.steps.HomePageSteps.userClickOnAcceptCookies(HomePageSteps.java:17)\r\n\tat ✽.And User click on accept cookies(homepage.feature:5)\r\n",
  "status": "failed"
});
});