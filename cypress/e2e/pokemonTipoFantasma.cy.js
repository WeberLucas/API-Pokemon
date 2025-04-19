describe('Testes com pokémons tipo fantasma', () => {
  
  context('Validação de nomes em diferentes idiomas', () => {
    it('Deve validar o nome do Gastly em japonês e romaji', () => {
      cy.validarIdioma(92, 'ja-Hrkt'); // id e idioma

      cy.api(`/pokemon-species/92`).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.names[0].name).to.eq('ゴース'); // japonês
        expect(body.names[1].name).to.eq('Ghos');   // romaji
      });
    });
  });

  context('Validação de URLs de idiomas', () => {
    it('Deve validar as URLs dos idiomas do Gastly', () => {
      cy.validarIdioma(92, 'ja-Hrkt'); // id e idioma 

      cy.api(`/pokemon-species/92`).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.names[0].language.url).to.eq('https://pokeapi.co/api/v2/language/1/'); // ja-Hrkt
        expect(body.names[1].language.url).to.eq('https://pokeapi.co/api/v2/language/2/'); // roomaji
      });
    });
  });

  context('Validação de atributos da curva de aprendizagem do Pokémon', () => {
    it('Deve verificar que growth_rate.name é "medium slow"', () => {
      cy.api('/pokemon-species/92').then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.growth_rate.name).to.eq('medium-slow');
      });
    });

    it('Deve verificar que o campo is_baby está como false', () => {
      cy.api('/pokemon-species/92').then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.is_baby).to.be.false;
      });
    });
  });

  context('Validação de imunidades do tipo Fantasma', () => {
    it('Deve validar que o tipo Fantasma é imune a Normal e Lutador', () => {
      cy.api('/type/8').then(({ status, body }) => {
        expect(status).to.eq(200);

        const imunidades = body.damage_relations.no_damage_from.map(t => t.name);
        expect(imunidades).to.include.members(['normal', 'fighting']);
      });
    });
  });
});
