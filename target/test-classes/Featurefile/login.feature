Feature: To validate facebook login functionality 

Background:
	Given User is on facebooklogin page
	
	Scenario: To verify login with invalid credentials 
	When User to enter username and password icon 
	|manoranjan|jio||gio|icon|
	Then User click login button 
	
	
	Scenario: To verify the first and last name with valid and invalid credentials
	When User to enter the first and last name
	Then user to click the signup
	
	
