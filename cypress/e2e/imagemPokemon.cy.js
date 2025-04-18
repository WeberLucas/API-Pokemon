// Testes relacionados à validação de imagens dos Pokémons
describe('Validação de Imagem do Pokémon', () => {

  it('Valida se a imagem do Riolu está correta', () => {
    cy.validaImagemDoPokemon(
      447, 
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/447.png'
    );
  });

  it('Valida se a imagem do Riolu é uma URL válida de arquivo PNG', () => {
    cy.validaSeImagemEPng(447);
  });

});
