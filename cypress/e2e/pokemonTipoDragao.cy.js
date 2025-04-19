describe('Testes com pokémons tipo dragão', () => {
    it('Deve verificar se os nomes dos stats do Dragonite estão corretos', () => {
      cy.api('/pokemon/149').then(({ status, body }) => {
        expect(status).to.eq(200);
  
        const statsEsperados = [
          'hp',
          'attack',
          'defense',
          'special-attack',
          'special-defense',
          'speed'
        ];
        const statsRecebidos = body.stats.map(stat => stat.stat.name);
  
        statsEsperados.forEach(stat => {
          expect(statsRecebidos).to.include(stat);
        });
      });
    });
  
    it('Deve verificar os valores base dos stats do Dragonite', () => {
      cy.api('/pokemon/149').then(({ status, body }) => {
        expect(status).to.eq(200);
  
        const statsEsperados = {
          hp: 91,
          attack: 134,
          defense: 95,
          'special-attack': 100,
          'special-defense': 100,
          speed: 80
        };
  
        body.stats.forEach(statObj => {
          const nome = statObj.stat.name;
          const valorBase = statObj.base_stat;
          expect(valorBase).to.eq(statsEsperados[nome]);
        });
      });
    });
  
    it('Deve validar que Dragonite possui 6 stats na ordem correta', () => {
      cy.api('/pokemon/149').then(({ status, body }) => {
        expect(status).to.eq(200);
  
        const statsEsperados = [
          'hp',
          'attack',
          'defense',
          'special-attack',
          'special-defense',
          'speed'
        ];
  
        const statsRecebidos = body.stats.map(stat => stat.stat.name);
  
        expect(statsRecebidos).to.deep.equal(statsEsperados);
      });
    });
  });
  