/**
 * Created by acer on 2017/3/12.
 */



let webdriver = require( 'selenium-webdriver' ) ,
	By = webdriver.By ,
	until = webdriver.until;

let driver = new webdriver.Builder()
	.forBrowser( 'chrome' )
	.build();

driver.get( "https://www.zhihu.com/#signin" );
driver.findElement( By.css( ".account.input-wrapper input" ) ).sendKeys( 'niuyiwangqun@sohu.com' );
driver.findElement( By.css( ".verification.input-wrapper input" ) ).sendKeys( 'cs2///' );
driver.findElement( By.css( '.button-wrapper.command button' ) ).click();
// driver.wait( until.titleIs( 'webdriver_百度搜索' ) , 1000 );
// driver.quit();
setTimeout( function () {
	console.log( "end" )
} , 2000 );