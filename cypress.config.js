const { defineConfig } = require('cypress');
const cypressSplit = require('cypress-split'); //importa o cypress split

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
    fixturesFolder: false,
    experimentalRunAllSpecs: true, // Permite o botão "Run all specs" no Cypress open
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      
      require('cypress-mochawesome-reporter/plugin')(on);

      return config; 
    },
    //configura o mocha
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true,
      json: false,
  },
},
});
