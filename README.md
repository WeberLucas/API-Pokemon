# 🧪 Testes Automatizados - PokeAPI com Cypress

Este projeto contém testes automatizados usando Cypress, com foco em testes de API na [PokeAPI](https://pokeapi.co/).

## 🔧 Tecnologias

- [Cypress](https://www.cypress.io/)
- [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api)
- [mochawesome](https://www.npmjs.com/package/mochawesome)
- JavaScript
- Node.js

## ▶️ Como executar os testes

1. Clone este repositório:
   ```bash
   git clone https://github.com/WeberLucas/API-Pokemon.git
   cd API-Pokemon
   ```

2. Instale as dependências:
   ```bash
   npm install cypress
   ```

3. Execute os testes em modo headless com relatório:
   ```bash
   npx cypress run --reporter mochawesome
   ```

   Ou, modo interativo:
   ```bash
   npx cypress open
   ```

## 📦 Instalação dos Plugins

### ✅ Cypress Plugin API

Este plugin facilita o uso de `cy.api()` em testes de API.

Instalação:
```bash
npm install cypress-plugin-api --save-dev
```

Importe no seu projeto:

```js
// No arquivo cypress/support/e2e.js
import 'cypress-plugin-api'
```

### 📊 Mochawesome

Para gerar relatórios de execução:

Instalação:
```bash
npm install --save-dev cypress-mochawesome-reporter
```

No `cypress.config.js`:

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
  },
})
```

## 🧪 Exemplos de Testes

### 🔹 Consulta de Pokémon existente

```js
cy.api('GET', '/pokemon/pikachu').then((res) => {
  expect(res.status).to.eq(200)
  expect(res.body.name).to.eq('pikachu')
})
```

### 🔹 Erro ao buscar Pokémon inexistente

```js
cy.api('GET', '/pokemon/xablau').then((res) => {
  expect(res.status).to.eq(404)
})
```

## 📁 Estrutura de Pastas

```
cypress/
├── e2e/
│   └── pokeapi.cy.js
├── support/
│   └── e2e.js
cypress.config.js
```

## 📝 Referências

- [PokeAPI Docs](https://pokeapi.co/docs/v2)
- [Cypress](https://docs.cypress.io)
- [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api)
- [mochawesome](https://www.npmjs.com/package/mochawesome)
