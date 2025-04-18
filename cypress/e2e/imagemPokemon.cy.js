describe('Validação de Imagem do Pokémon', () => {
    it('Valida a imagem do Riolu', () => {
      cy.validaImagemDoPokemon(447, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/447.png');
    });
  });
    it('Verifica que a imagem do Riolu é uma URL válida e um arquivo PNG', () => {
      cy.validaSeImagemEPng(447);
    });
  
  