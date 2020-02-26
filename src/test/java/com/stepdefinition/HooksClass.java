package com.stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

import BaseClass.UtilityClass;
public class HooksClass extends UtilityClass {
	
	@Before
	public void beforeExecution() {
		System.out.println("i am before");
		launchBrowser("https://www.facebook.com/");
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
	}
	
	@After
	public void afterExecution() {
		System.out.println("i am after");
		driver.quit();
	}
	
}
