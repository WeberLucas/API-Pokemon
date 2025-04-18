describe('Testes com pokémons tipo elétrico', () => {

    it('Valida que a cadeia evolutiva do Ditto possui no máximo uma fase (sem evolução)', () => {
      const idCadeiaEvolutiva = 66; // id ditto
  
      cy.api(`/evolution-chain/${idCadeiaEvolutiva}`).then(({ status, body }) => {
        expect(status).to.eq(200);
  
        const nomes = [];
  
        let atual = body.chain;
  
        while (atual) {
          nomes.push(atual.species.name);
          if (atual.evolves_to.length === 0) break;
          atual = atual.evolves_to[0];
        }
  
        expect(nomes).to.deep.eq(['ditto']);
      });
    });
  });
  