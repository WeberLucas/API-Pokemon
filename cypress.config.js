const { defineConfig } = require('cypress')
const cypressSplit = require("cypress-split")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      return config    
    },

    experimentalRunAllSpecs: true,//permite que ao rodar npx cypress open habilite o botão de rodar todos os testes 
    //este botão fica ao lado de componet specs
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
})
