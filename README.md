Tests de QA Automation para web
-----------------------------------
Tests de diferentes herramientas para poder automatizar la realización de QA para sitios web.

## Uso ##
Instalar todos los requerimentos con

    npm install
Y agregar a tu sistema variables de entorno:

    SAUCE_ACCESS_KEY
    SAUCE_USERNAME
usando datos de su cuenta de saucelabs.

**Ejemplos especificos**
Hay algúnos ejemplos en que en el código hay un comentario denotando que se requiere de usas selenium-standalone-server.jar... este se encuentra en la carpeta `utils`
Para ejecutarlo usar el comando (ya teniendo JavaSDK instalado)

    java -jar selenium-server-standalone-2.53.1.jar
el comando ejecutarlo dentro de la carpeta *utils*

**Otros requerimentos**
Para las versiones más recientes de Firefox.. y en general para cualquier versión de Chrome, se necesita agregar al path la carpeta *utils* que contiene:

    chromedriver
    geckodriver
