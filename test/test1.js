let webdriver = require( 'selenium-webdriver' ) ,
	By = webdriver.By ,
	until = webdriver.until;

let driver = new webdriver.Builder()
	.forBrowser( 'firefox' )
	.build();

console.log("===================");

driver.get( 'http://www.baidu.com' );
// driver.findElement( By.id( 'kw' ) ).sendKeys( 'webdriver' );
// driver.findElement( By.id( 'su' ) ).click();

driver.quit();