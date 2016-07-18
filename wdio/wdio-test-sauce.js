var webdriverio = require('webdriverio'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY;

var options = {
    user: username,
    key: accessKey,
    host: "ondemand.saucelabs.com",
    port: 80,
    logLevel: "silent",
    desiredCapabilities: {  browserName: 'chrome',
       platform: 'Windows 10',
       version: '51.0'
    }
};
webdriverio.remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    }).end();
