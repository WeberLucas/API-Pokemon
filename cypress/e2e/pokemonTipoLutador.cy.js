// Testes relacionados a Pokémons do tipo lutador (fogo)
describe('Testes com Pokémon tipo Lutador ', () => {

    it('Valida se os Pokémon são do tipo lutador', () => {
      cy.validaPokemonsDoTipo(2, ['machop', 'machoke', 'machamp', 'hitmonlee']);
    });
  
    it('Valida a linha evolutiva do Timburr', () => {
      cy.validaEvolucaoPokemon(272, ['timburr', 'gurdurr', 'conkeldurr']);
    });
  
  });
  