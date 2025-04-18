describe('Sorteando um pokemon', () => {

  it('Valida dados aleatórios de um Pokémon', () => {
    const idPokemon = Math.floor(Math.random() * 1025) + 1;

    cy.api(`/pokemon/${idPokemon}`).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.name).to.be.a('string');
      expect(body.abilities)
        .to.be.an('array')
        .and.to.have.length.greaterThan(0);
      expect(body.moves)
        .to.be.an('array')
        .and.to.have.length.greaterThan(0);
      expect(body.height).to.be.a('number');
    });
  });
});
