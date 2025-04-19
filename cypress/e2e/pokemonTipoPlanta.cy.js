describe('Testes com pokémons tipo planta', () => {

it('Verifica se o primeiro Pokémon da cadeia está em letras minúsculas', () => {
    const idCadeiaEvolutiva = 1; // Bulbasaur
  
    cy.api(`/evolution-chain/${idCadeiaEvolutiva}`).then((response) => {
      expect(response.status).to.eq(200);
  
      const nome = response.body.chain.species.name;
      expect(nome).to.eq(nome.toLowerCase());
    });
  });
  it('Verifica que Bulbasaur não evolui de nenhuma outra espécie (evolves_from_species é null)', () => {
    cy.api('/pokemon-species/1').then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.evolves_from_species).to.be.null;
    });
  }); 
});