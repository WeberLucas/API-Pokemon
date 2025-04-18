const { defineConfig } = require('cypress');
const cypressSplit = require('cypress-split'); //importa o cypress split

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
    experimentalRunAllSpecs: true, // Permite o botão "Run all specs" no Cypress open
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      
      require('cypress-mochawesome-reporter/plugin')(on);

      return config; 
    },
    //configura o mocha
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        quiet: true,
        overwrite: false,
        html: true,
        json: true,
      },
    },
  },
});
