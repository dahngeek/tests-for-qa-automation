var wd = require('wd'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
    desiredCapabilities= {
        browserName: 'firefox'
    }, driver = wd.remote();

driver.init(desiredCapabilities,function(error) {
    if (error) {
        throw new Error('No se inicio correctamente. asegurate de tener corriendo selenium-server-standalone');
    }
      driver.get("http://admc.io/wd/test-pages/guinea-pig.html", function() {
      driver.title(function(err, title) {
        // title.should.include('WD');
        driver.elementById('i am a link', function(err, el) {
          driver.clickElement(el, function() {
            /* jshint evil: true */
            driver.eval("window.location.href", function(err, href) {
              // href.should.include('guinea-pig2');
              driver.quit();
            });
          });
        });
      });
    });
});
