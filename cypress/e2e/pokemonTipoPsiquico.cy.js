describe('Testes com pokémons tipo psíquicos que são Lendários ou Míticos', () => {

    it('Deve validar que Mewtwo é lendário e não é mítico', () => {
      cy.api('/pokemon-species/150').then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.is_legendary).to.be.true;
        expect(body.is_mythical).to.be.false;
        expect(body.genera.some(g => g.genus.includes('Genetic Pokémon'))).to.be.true;
      });
    });
    it('Deve validar que Mew é mítico e não é lendário', () => {
      cy.api('/pokemon-species/151').then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.is_legendary).to.be.false;
        expect(body.is_mythical).to.be.true;
        expect(body.genera.some(g => g.genus.includes('New Species Pokémon'))).to.be.true;
      });
    });
});
  