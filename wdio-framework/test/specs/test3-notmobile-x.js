var assert = require('assert');
var config = require('../config.js');

describe(config.testName+' - Hacienda page', function() {

    it('should have the right title - the fancy generator way', function () {
        browser.url('http://haciendadelcomendador.com');
        var title = browser.getTitle();
        assert.equal(title, 'Hacienda del comendador');
    });
});
