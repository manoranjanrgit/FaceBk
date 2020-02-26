package Demo;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Browser {
	
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","D:\\Eclipse_64 bit\\eclipse\\Navamani\\DataTypes\\driver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://toolsqa.com/automation-practice-table/");
		
		List<WebElement> data = driver.findElements(By.xpath("//select[@id='continentsmultiple']"));
		for(int i=0;i<data.size();i++) {
			WebElement p = data.get(i);
			String text = p.getText();
			System.out.println(text);
				
			
			
				
			}
			
		}
	}


