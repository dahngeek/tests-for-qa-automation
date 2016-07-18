exports.config = {
  // ==========================
  // Configuramos saucelabs
  // ==========================
    host: "ondemand.saucelabs.com",
    port:80,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,


    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        './test/specs/**/*-x.js'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 8,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
      // ===============    Android       ===================
    {
        browserName: 'android',
        deviceName: 'Samsung Galaxy S4 Emulator',
        platform: 'linux',
        version: '4.3',
        exclude: [
            './test/specs/*-notmobile.js'
        ]
    },
    // {
    //   browserName: 'android',
    //   platform: 'linux',
    //   version: '4.3',
    //   deviceName: 'Samsung Galaxy S3 Emulator',
    //   deviceOrientation: 'portrait'
    // },
    // ===============       PC      =======================
    //Chrome
    // {  browserName: 'chrome',
    //    platform: 'Windows 10',
    //    version: '51.0',
    //    resolution: {width: 1024, height:768}
    // },
    // {  browserName: 'chrome',
    //    platform: 'Windows 10',
    //    version: '51.0',
    //    resolution: {width: 800, height:600}
    // },
    // //IE
    // {
    //   browserName: 'internet explorer',
    //   platform: 'Windows 7',
    //   version: '10.0',
    //   resolution: {width: 800, height:600}
    // },
    // {
    //   browserName: 'internet explorer',
    //   platform: 'Windows 7',
    //   version: '10.0',
    //   resolution: {width: 1024, height:768}
    // },
    // // =================== Mac ======================
    // {  browserName: 'safari',
    //    platform: 'OS X 10.11',
    //    version: '9.0',
    //    resolution: {width: 1280, height:800}
    // },
    // =====================  iPhone ====================
    // {
    //     browserName: 'Safari',
    //     appiumVersion: '1.5.3',
    //     deviceName: 'iPhone 6 Plus',
    //     platformVersion: '9.3',
    //     platformName: 'iOS',
    //     exclude: [
    //         './test/specs/*-notmobile.js'
    //     ]
    // },
    // {
    //   browserName: 'Safari',
    //   appiumVersion: '1.5.3',
    //   deviceName: 'iPhone 5 Simulator',
    //   deviceOrientation: 'portrait',
    //   platformVersion: '9.1',
    //   platformName: 'iOS',
    //   exclude: [
    //       './test/specs/*-notmobile.js'
    //   ]
    // }
  ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 1800000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 1800000,
    //
    // Default request retries count
    connectionRetryCount: 1,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['sauce'],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['spec'],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 45000
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    // onPrepare: function (config, capabilities) {
    // },
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function (capabilities, specs) {
      if (!browser.isMobile) {
        var cap = browser.desiredCapabilities;
        // console.log(cap.resolution);
        if (cap.resolution) {
          browser.resolutiontext = cap.resolution.width+"x"+cap.resolution.height;
          browser.windowHandleSize(cap.resolution);
        }
      } else {
        browser.resolutiontext = "Mobile";
      }
    },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function (suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    // beforeHook: function () {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    // afterHook: function () {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // beforeTest: function (test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function (commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function (commandName, args, result, error) {
    // },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // afterTest: function (test) {
    // },
    //
    // Hook that gets executed after the suite has ended
    // afterSuite: function (suite) {
    // },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    // after: function (result, capabilities, specs) {
    // },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    // onComplete: function(exitCode) {
    // }
}