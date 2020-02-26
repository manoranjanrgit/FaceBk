package com.stepdefinition;

import java.util.List;
import BaseClass.UtilityClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;

public class LoginStepDefinition extends UtilityClass {
	
	
	@Given("User is on facebooklogin page")
	public void user_is_on_facebooklogin_page() {
	   
		System.out.println("mano");
	}

	@When("User to enter username and password icon")
	public void user_to_enter_username_and_password_icon(io.cucumber.datatable.DataTable d) {
		List<String> l = d.asList();
		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys(l.get(3));
		WebElement pass = driver.findElement(By.id("pass"));
		pass.sendKeys(l.get(0));
	}

	@Then("User click login button")
	public void user_click_login_button() {
		 WebElement click = driver.findElement(By.id("loginbutton"));
		   click.click();
	}
	
	@When("User to enter the first and last name")
	public void user_to_enter_the_first_and_last_name() {
		WebElement first = driver.findElement(By.id("u_0_m"));
		   first.sendKeys("manoj");
		   WebElement last = driver.findElement(By.id("u_0_o"));
		   last.sendKeys("kumar");
	}

	@Then("user to click the signup")
	public void user_to_click_the_signup() {
	    
		WebElement sign = driver.findElement(By.xpath("(//button[text()='Sign Up'])[1]"));
		   sign.click();	
		
	}
	
}
