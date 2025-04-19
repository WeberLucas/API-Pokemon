describe('Testes de frutinhas (/berry/{id})', () => {

    context('Validação de atributos da berry', () => {
  
      it('Deve validar o nome da berry com ID 1', () => {
        cy.api('/berry/1').then(({ status, body }) => {
          expect(status).to.eq(200);
          expect(body.name).to.eq('cheri');
        });
      });
  
      it('Deve validar o tempo de crescimento da cheri berry (growth_time)', () => {
        cy.api('/berry/1').then(({ status, body }) => {
          expect(status).to.eq(200);
          expect(body.growth_time).to.eq(3); // valor esperado baseado na documentação
        });
      });
  
      it('Deve validar que o sabor principal da cheri berry é spicy', () => {
        cy.api('/berry/1').then(({ status, body }) => {
          expect(status).to.eq(200);
          expect(body.flavors.find(f => f.potency > 0).flavor.name).to.eq('spicy');
        });
      });
  
    });
  
  });
  