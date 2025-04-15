Cypress.Commands.add('verificaHabilidade', (idPokemon, habilidadeEsperada,golpeEsperado) => {
    cy.api(`/pokemon/${idPokemon}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.abilities[0].ability.name).to.eq(habilidadeEsperada);
      expect(response.body.moves[0].move.name).to.eq(golpeEsperado);

    });
  });
  
  Cypress.Commands.add('verificaNomePokemon', (idPokemon, nomeEsperado) => {
    cy.api(`/pokemon/${idPokemon}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.forms[0].name).to.eq(nomeEsperado);// nome da forma do pokemon
      expect(response.body.name).to.eq(nomeEsperado);//nome do pokemon

    });

    Cypress.Commands.add('validaPokemonAleatorio', () => {
        const idPokemon = Math.floor(Math.random() * 1025) + 1;
      
        cy.api(`/pokemon/${idPokemon}`).then((response) => {
          expect(response.status).to.eq(200);
      
          // Valida que o nome do Pokémon é string
          expect(response.body.name).to.be.a('string');
      
          // Valida que o Pokémon tem habilidades
          expect(response.body.abilities).to.be.an('array').and.to.have.length.greaterThan(0);
      
          // Valida que o Pokémon tem pelo menos um golpe
          expect(response.body.moves).to.be.an('array').and.to.have.length.greaterThan(0);
      
          // Valida que o campo altura do Pokémon é numérico
          expect(response.body.height).to.be.a('number');
        });
      });
      
  });
  