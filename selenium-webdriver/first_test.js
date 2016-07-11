var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

var cerrarNavegador = function (){
  driver.quit();
}

var imprimirTitulo = function(){
  driver.getTitle().then(function(titulo){
    console.log(titulo);
    cerrarNavegador();
  });
}

driver.get('http://www.google.com').then(imprimirTitulo);
