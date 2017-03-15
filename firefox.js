/**
 * Created by acer on 2017/3/15.
 */
let fs = require( "fs" );
let webdriver = require( 'selenium-webdriver' );

let t0 = new Date();

let driver = new webdriver.Builder()
	.forBrowser( 'firefox' )
	.build();

function savePng ( src , base64Data , callback ) {
	let dataBuffer = new Buffer( base64Data , 'base64' );
	fs.writeFile( src , dataBuffer , callback );
}

driver.get( "https://www.jd.com" ).then( function () {
	driver.executeScript( "document.body.scrollTop=4000;document.body.scrollTop=0;" ).then( function () {
		driver.takeScreenshot().then( function ( data ) {
			savePng( "./image/jd1.png" , data );
		} );
	} );
} );

process.on( "exit" , function () {
	console.log( new Date() - t0 + " ms" );
} );
