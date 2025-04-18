Cypress.Commands.add('verificaHabilidade', (idPokemon, habilidadeEsperada, golpeEsperado) => {
  cy.api(`/pokemon/${idPokemon}`).then(({ status, body }) => {
    expect(status).to.eq(200);
    expect(body.abilities[0].ability.name).to.eq(habilidadeEsperada);
    expect(body.moves[0].move.name).to.eq(golpeEsperado);
  });
});

Cypress.Commands.add('validaNomeDoPokemon', (idPokemon, nomeEsperado) => {
  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.forms[0].name).to.eq(nomeEsperado);
    expect(response.body.name).to.eq(nomeEsperado);
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
Cypress.Commands.add('validaImagemDoPokemon', (idPokemon, urlEsperada) => {
  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status).to.eq(200);
    const imagem = response.body.sprites.versions['generation-iv']['diamond-pearl'].front_default;
    expect(imagem).to.eq(urlEsperada);
  });
});
Cypress.Commands.add('validaSeImagemEPng', (idPokemon) => {
  cy.api(`/pokemon/${idPokemon}`).then((response) => {
    expect(response.status, 'Status da resposta deve ser 200').to.eq(200);
    const imagem = response.body.sprites.versions['generation-iv']['diamond-pearl'].front_default;

    expect(imagem, 'URL da imagem deve começar com http ou https').to.match(/^https?:\/\/.+/);

    expect(imagem, 'URL da imagem deve terminar com .png').to.match(/\.png$/);
  });
});

