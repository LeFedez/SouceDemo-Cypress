const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: 'images',
  reporterOptions: {
    videoOnFailOnly: false
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl : 'https://www.saucedemo.com/v1/',
  },
});