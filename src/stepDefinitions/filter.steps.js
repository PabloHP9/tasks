import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../chai-pages/home.page";

Given("I am on practicesoftwaretesting.com home page", async () => {
  await homePage.openToolShop();
  await homePage.checkHomePage();
});

When("I click on the 'power tools' search query", async () => {
  await homePage.clickOnPowerTools();
});

When("I click on the 'Forgeflex' search query", async () => {
  await homePage.clickOnForgeflex();
});

Then("I see the power tools", async () => {
  await homePage.checkPowerToolsFilter();
});

Then("I see the Forgeflex tools", async () => {
  await homePage.checkForgeFlexFilter();
});
