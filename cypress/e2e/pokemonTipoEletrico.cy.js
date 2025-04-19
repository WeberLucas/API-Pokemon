// Testes relacionados a Pokémons do tipo elétrico
describe('Testes com pokémons tipo elétrico', () => {
  
  it('Valida linha evolutiva de Pichu, Pikachu e Raichu', () => {
    // Valida o nome dos pokémons na linha evolutiva
    cy.validaNomeDoPokemon(172, 'pichu');// id, nome
    cy.validaNomeDoPokemon(25, 'pikachu');
    cy.validaNomeDoPokemon(26, 'raichu');

    // Verifica habilidades e movimentos principais
    cy.verificaHabilidade(172, 'static', 'double-slap');//id, habilidade e movimento
    cy.verificaHabilidade(25, 'static', 'mega-punch');
    cy.verificaHabilidade(26, 'static', 'mega-punch');
  });

  it('Valida o tipo do Pichu como elétrico', () => {
    cy.validaTipoPokemon(172, 'electric');// id, tipo do pokemon
  });

  it('Valida se o Electabuzz está listado como tipo elétrico', () => {
    cy.validaPokemonDoTipo(13, 'electabuzz');//id, nome
  });

});
