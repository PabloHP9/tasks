import { Given, When, Then } from "@wdio/cucumber-framework";
import contactPage from "../chai-pages/contact.page";
import homePage from "../chai-pages/home.page";

Given("I am on practicesoftwaretesting.com", async () => {
  await homePage.openToolShop();
  await homePage.checkHomePage();
});
Given("I click on Contact", async () => {
  await homePage.clickOnContact();
});

When("I fill the contact fields", async () => {
  await contactPage.fillFirstNameField("John");
  await contactPage.fillLastNameField("Doe");
  await contactPage.fillemailField("ramdom@gmail.com");
  await contactPage.clickOnCustomerService;
  await contactPage.filltextfield();
  await contactPage.clickOnSend();
  await contactPage.checkContactMessage();
});

When("I fill the contact fields with wrong credentials", async () => {
  await contactPage.fillFirstNameField("John");
  await contactPage.fillLastNameField("Doe");
  await contactPage.fillemailField("ramdom@gmail.com");
  await contactPage.clickOnCustomerService();
});

When("I click on send", async () => {
  await contactPage.clickOnSend();
});

Then("I see the contact message", async () => {
  await contactPage.checkContactMessage();
});

Then("I see the contact error message", async () => {
  await contactPage.checkNoMessageError();
});
