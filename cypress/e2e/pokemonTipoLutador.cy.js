describe('Testes com pokemon tipo fogo', () => {
    it('Valida que os pokemons são do tipo lutador', () => {
    cy.validaPokemonsDoTipo(2, ['machop', 'machoke', 'machamp','hitmonlee']);
    });
    it('Valida linha evolutiva do timburr', () => {
        cy.validaEvolucaoPokemon(272, ['timburr', 'gurdurr','conkeldurr']);
      });
      
  });
  