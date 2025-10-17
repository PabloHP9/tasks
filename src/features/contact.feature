@chai
Feature: Make a contact  

 Background:  

      Given I am on practicesoftwaretesting.com

      And I click on Contact

 Scenario: make a contact using proper credentials

       When I fill the contact fields

       And I click on send

      Then I see the contact message 

Scenario: make a contact using wrong credentials

       When I fill the contact fields with wrong credentials

       And I click on send

      Then I see the contact error message