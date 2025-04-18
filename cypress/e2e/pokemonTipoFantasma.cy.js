describe('Testes com pokémons tipo fantasma', () => {
    it('Validando nome do Gastly em vários idiomas', () => {
      cy.validarIdioma(92, 'ja-Hrkt'); // id e idioma
  
      cy.api(`/pokemon-species/92`).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.names[0].name).to.eq('ゴース');
      });
    });
  
    it('Validando URL do idioma do Gastly', () => {
      cy.validarIdioma(92, 'ja-Hrkt'); // id e idioma 
  
      cy.api(`/pokemon-species/92`).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.names[0].language.url).to.eq('https://pokeapi.co/api/v2/language/1/');
      });
    });
  });
  