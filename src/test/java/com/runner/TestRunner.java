package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.stepdefinition.JvmReport;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\test\\resources"},glue= {"com.stepdefinition"},monochrome=true,dryRun=false,plugin= {"html:D:\\Eclipse_64 bit\\eclipse\\Navamani\\FaceBk\\Report",
		"json:D:\\Eclipse_64 bit\\eclipse\\Navamani\\FaceBk\\Report\\Output.json","rerun:src\\test\\resources\\failedsenarios.txt"})

public class TestRunner {
	@AfterClass
	public static void reportgeneration() {
		JvmReport.generateJvmReport("D:\\Eclipse_64 bit\\eclipse\\Navamani\\FaceBk\\Report.Output.json");
		
	}

}
