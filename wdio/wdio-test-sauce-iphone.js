var webdriverio = require('webdriverio'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY;

var options = {
    user: username,
    key: accessKey,
    host: "ondemand.saucelabs.com",
    port: 80,
    logLevel: "verbose",
    desiredCapabilities: {
        browserName: 'Safari',
        appiumVersion: '1.5.3',
        deviceName: 'iPhone 6 Plus',
        platformVersion: '9.3',
        platformName: 'iOS',
        name: 'Sample Test',
        app: ''
    }
};
webdriverio.remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    }).end();
