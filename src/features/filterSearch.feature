@chai
Feature: Search by filter

 Background:  

      Given I am on practicesoftwaretesting.com home page

 Scenario: make a search filtering by category

       When I click on the 'power tools' search query 

      Then I see the power tools 

Scenario: make a search filtering by brand

        When I click on the 'Forgeflex' search query 

        Then I see the Forgeflex tools 