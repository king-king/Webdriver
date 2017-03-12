let webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get('http://www.baidu.com')