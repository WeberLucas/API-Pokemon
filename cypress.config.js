const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
    setupNodeEvents(on, config) {
      // event listeners podem ser definidos aqui, se precisar
    },

    experimentalRunAllSpecs: true,//permite que ao rodar npx cypress open habilite o botão de rodar todos os testes 
    //este botão fica ao lado de componet specs
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: true,     
    html: true,          
    json: false           
  },
})
