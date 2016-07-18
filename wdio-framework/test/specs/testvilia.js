var assert = require('assert');
var config = require('../config.js');
describe(config.testName+' - Vilia'+' @ ('+browser.resolutiontext+')', function() {
  it('Shows Modal', function () {
        browser.url('http://www.vilia.com');
        var visible = browser.isVisible('#modalEncuentra > div > div');
        assert(visible);
    });
  it('shound hide modal', function (){
      browser.click("#modalEncuentra > div > div > div > div.modal-body > center > button");
      var visible = browser.isVisible('#modalEncuentra > div > div');
      assert.ifError(visible);
  });
  it('muestra y selecciona renta', function(){
    browser.click('.btn-tipoOperacion');
    if (browser.isMobile) {
      var visible = browser.isVisible('div.ModalCustome');
      assert(visible);
      if (visible) {
        browser.click("body > div.ModalCustome > div.section-list-m-custome > ul > li:nth-child(1) > a");
      }
    } else {
      var visible = browser.isVisible('ul.dropdown-menu.tipoOperacion');
      assert(visible);
      if (visible) {
        browser.click("#section0 > div > div.section-frontHome > div.parent > div > div:nth-child(2) > div > ul > li:nth-child(2) > a");
      }
    }
  });
  it('should show Apartamentos dropdown', function(){
    if (browser.isMobile) {
      //btn-tipoPropiedad
        browser.click(".btn-tipoPropiedad");
        var visible = browser.isVisible('div.ModalCustome');
        assert(visible);
        if (visible) {
          browser.click("body > div.ModalCustome > div.section-list-m-custome > ul > li:nth-child(3) > a");
        }
    }else{
        browser.click("#section0 > div > div.section-frontHome > div.parent > div > div:nth-child(3) > div > button");
        var visible = browser.isVisible("#section0 > div > div.section-frontHome > div.parent > div > div:nth-child(3) > div > ul");
        assert(visible);
        if (visible) {
          browser.click("#section0 > div > div.section-frontHome > div.parent > div > div:nth-child(3) > div > ul > li:nth-child(3) > a");
        }
    }
  });
  it('Shoud let you type. and show sugg', function(){
    if (browser.isMobile) {
      browser.click("#input-search-mobile");
      var visible = browser.isVisible("div.ModalCustomeAutocomplete");
      assert(visible, 'Modal search se muestra');
      var focus = browser.hasFocus("#input-search");
      assert(focus ,'Input search se enfoca');
      browser.keys("zona");
    } else {
      browser.setValue("#input-search", "zona");
      var visible = browser.isVisible("#multiple-datasets > div.tt-menu");
      assert(visible);
    }
  });
  it('should show sugg', function(){
    var visible = browser.isVisible("#multiple-datasets > div.tt-menu");
    assert(visible, 'autocomplete se muestra');
    if (visible) {
      browser.click("#multiple-datasets > div.tt-menu > div.tt-dataset.tt-dataset-zonas > div:nth-child(2)");
    }
  });
});
