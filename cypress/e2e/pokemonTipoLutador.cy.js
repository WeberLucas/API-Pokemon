// Testes relacionados a Pokémons do tipo lutador
describe('Testes com Pokémon tipo Lutador', () => {

    it('Valida se os Pokémon são do tipo lutador', () => {
      cy.validaPokemonsDoTipo(2, ['machop', 'machoke', 'machamp', 'hitmonlee']);
    });
  
    it('Valida a linha evolutiva do Timburr', () => {
      cy.validaEvolucaoPokemon(272, ['timburr', 'gurdurr', 'conkeldurr']);
    });
  
    // Testes relacionados à validação de imagens dos Pokémons
  
    it('Valida se a imagem do Riolu está correta', () => {
      cy.validaImagemDoPokemon(
        // 447 é o ID do Riolu
        447,
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/447.png'
      );
    });
  
    it('Valida se a imagem do Riolu é uma URL válida de arquivo PNG', () => {
      cy.api(`/pokemon/447`).then(({ status, body }) => {
        expect(status, 'Status da resposta deve ser 200').to.eq(200);
  
        const imagem = body.sprites.versions['generation-iv']['diamond-pearl'].front_default;
  
        expect(imagem, 'URL da imagem deve começar com http ou https').to.match(/^https?:\/\/.+/);
        expect(imagem, 'URL da imagem deve terminar com .png').to.match(/\.png$/);
      });
    });
  
  });
  