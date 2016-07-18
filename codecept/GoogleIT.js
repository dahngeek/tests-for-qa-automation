
Feature('El primer Test');

Scenario('test something', (I) => {
  I.amOnPage('http://google.com/');
  I.see('Google');
});
