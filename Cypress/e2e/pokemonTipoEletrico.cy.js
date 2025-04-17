describe('Testes com pokemon tipo elétrico', () => {
    it('Valida linha evolutiva de pichu com suas habilidades e movimentos', () => {
      cy.validaNomeDoPokemon(172, 'pichu');
      cy.validaNomeDoPokemon(25, 'pikachu');
      cy.validaNomeDoPokemon(26, 'raichu');
      cy.verificaHabilidade(172, 'static','double-slap');
      cy.verificaHabilidade(25, 'static','mega-punch');
      cy.verificaHabilidade(26, 'static','mega-punch');
    });
  
  it('valida tipo do pokemon',()=>{
    cy.validaTipoPokemon(172,'electric')
  })

  it('valida se o pokemon consta na lista do tipo elétrico',()=>{
    cy.validaPokemonDoTipo(13,'electabuzz')
  })
  });
  