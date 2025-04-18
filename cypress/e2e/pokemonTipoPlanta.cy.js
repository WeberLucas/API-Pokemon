describe('Testes com pokémons tipo planta', () => {

it('Verifica se o primeiro Pokémon da cadeia está em letras minúsculas', () => {
    const idCadeiaEvolutiva = 1; // Bulbasaur
  
    cy.api(`/evolution-chain/${idCadeiaEvolutiva}`).then((response) => {
      expect(response.status).to.eq(200);
  
      const nome = response.body.chain.species.name;
      expect(nome).to.eq(nome.toLowerCase());
    });
  });
});