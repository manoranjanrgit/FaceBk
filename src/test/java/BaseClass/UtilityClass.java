package BaseClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class UtilityClass {
	public static WebDriver driver;
	
	public static void launchBrowser(String url) {
		System.setProperty("webdriver.chrome.driver","D:\\Eclipse_64 bit\\eclipse\\Navamani\\FaceBk\\Driver\\chromedriver.exe" );
		   driver = new ChromeDriver();
		   driver.get(url);
	}
	public static void fill(WebElement e, String s) {
		e.sendKeys(s);
	}
}
