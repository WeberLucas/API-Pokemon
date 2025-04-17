Cypress.Commands.add('verificaHabilidade', (idPokemon, habilidadeEsperada, golpeEsperado) => {
  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.abilities[0].ability.name).to.eq(habilidadeEsperada);
    expect(response.body.moves[0].move.name).to.eq(golpeEsperado);
  });
});

Cypress.Commands.add('validaNomeDoPokemon', (idPokemon, nomeEsperado) => {
  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.forms[0].name).to.eq(nomeEsperado);
    expect(response.body.name).to.eq(nomeEsperado);
  });
});

Cypress.Commands.add('validaPokemonAleatorio', () => {
  const idPokemon = Math.floor(Math.random() * 1025) + 1;

  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.be.a('string');
    expect(response.body.abilities).to.be.an('array').and.to.have.length.greaterThan(0);
    expect(response.body.moves).to.be.an('array').and.to.have.length.greaterThan(0);
    expect(response.body.height).to.be.a('number');
  });
});

Cypress.Commands.add('validaTipoPokemon', (idPokemon, tipoEsperado) => {
  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.types[0].type.name).to.eq(tipoEsperado);
  });
});
Cypress.Commands.add('validaPokemonDoTipo', (tipoId, nomeEsperado) => {
  cy.api(`/type/${tipoId}`).then((response) => {
    expect(response.status).to.eq(200);
    const listaDePokemons = response.body.pokemon.map((p) => p.pokemon.name);
    expect(listaDePokemons).to.include(nomeEsperado);
  });
});



Cypress.Commands.add('validaPokemonsDoTipo', (tipoId, listaEsperada) => {
  cy.api(`/type/${tipoId}`).then((response) => {
    expect(response.status).to.eq(200);

    const nomesNaApi = response.body.pokemon.map(p => p.pokemon.name);

    listaEsperada.forEach(nome => {
      expect(nomesNaApi).to.include(nome);
    });
  });
});

Cypress.Commands.add('validaEvolucaoPokemon', (chainId, nomesEsperados) => {
  cy.api(`/evolution-chain/${chainId}`).then((response) => {
    expect(response.status).to.eq(200);

    const nomesEncontrados = [];

    function extrairNomes(estrutura) {
      nomesEncontrados.push(estrutura.species.name);
      estrutura.evolves_to.forEach(evo => extrairNomes(evo));
    }

    extrairNomes(response.body.chain);

    expect(nomesEncontrados).to.deep.eq(nomesEsperados);
  });
});
