package com.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void generateJvmReport(String json) {
		File f = new File("D:\\Eclipse_64 bit\\eclipse\\Navamani\\FaceBk\\Report\\jvmreport");
		Configuration con = new Configuration(f,"Facebooklogin functionality report");
		con.addClassifications("platform","windows");
		con.addClassifications("Browser","chrome");
		con.addClassifications("Verision","79.8");
		con.addClassifications("Sprint","8");
		
		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(json);
		
		ReportBuilder r= new ReportBuilder(jsonFiles, con);
		r.generateReports();
		
	}

}
