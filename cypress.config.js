const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Habilita el reporter
    reporter: 'cypress-json-reporter',
    reporterOptions: {
      // El nombre del archivo de salida
      jsonFile: 'cypress-results.json'
    },
  },
});