describe('Testes com Custom Commands', () => {
    it('Valida se a primeira habilidade é blaze', () => {
      cy.verificaHabilidade(655, 'blaze','fire-punch');

    });
  
    it('Valida se é o charmander e tem blaze', () => {
      cy.verificaNomePokemon(4, 'charmander');
      cy.verificaHabilidade(4, 'blaze','mega-punch');

    });
  });
  