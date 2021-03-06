// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
      chromeOptions: {
        args: [
            '--disable-dev-shm-usage',
            '--no-sandbox',
            //'--disable-gpu',
            '--headless',
            
            '--no-default-browser-check',
            '--start-maximized',
            '--window-size=1920,1080'
        ]
    }
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: [
      'example_spec.js',
      'angular_material/input_spec.js',
      'angular_material/mat_paginator_spec.js'
  
    ],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };
