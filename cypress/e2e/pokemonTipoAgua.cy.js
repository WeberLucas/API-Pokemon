describe('Testes com pokémons tipo água', () => {
    it('Valida que o tipo Água é fraco contra Elétrico e Planta', () => {
      cy.api('/type/11').then(({ status, body }) => {
        expect(status).to.eq(200);
  
        const fraquezas = body.damage_relations.double_damage_from.map(t => t.name);
        expect(fraquezas).to.include.members(['electric', 'grass']);
      });
    });
  
    it('Valida que o tipo Água resiste a Fogo, Gelo, Aço e Água', () => {
      cy.api('/type/11').then(({ status, body }) => {
        expect(status).to.eq(200);
  
        const resistencias = body.damage_relations.half_damage_from.map(t => t.name);
        expect(resistencias).to.include.members(['fire', 'ice', 'steel', 'water']);
      });
    });
  });
  