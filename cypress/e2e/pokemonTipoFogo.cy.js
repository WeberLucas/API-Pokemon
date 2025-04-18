describe('Testes com pokemon tipo fogo', () => {
  it('Valida linha evolutiva de fennekin com suas habilidades e movimentos', () => {
    cy.validaNomeDoPokemon(653, 'fennekin');
    cy.validaNomeDoPokemon(654, 'braixen');
    cy.validaNomeDoPokemon(655, 'delphox');
    cy.verificaHabilidade(653, 'blaze', 'scratch');
    cy.verificaHabilidade(654, 'blaze', 'fire-punch');
    cy.verificaHabilidade(655, 'blaze', 'fire-punch');
  });

  it('Valida se é o charmander e tem blaze', () => {
    cy.validaNomeDoPokemon(4, 'charmander');
    cy.verificaHabilidade(4, 'blaze', 'mega-punch');
  });

  it('Verifica se o Charmander está listado como tipo fire (/type/10)', () => {
    cy.validaPokemonDoTipo(10, 'charmander'); // 10 é o ID do tipo "fire"
  });
});
