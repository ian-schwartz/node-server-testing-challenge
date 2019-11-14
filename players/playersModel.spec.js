const db = require('../data/dbConfig');
const Players = require('./playersModel');

const { add } = require('./playersModel');

describe('players model', function() {
    describe('add()', function() {
        beforeEach(async () => {
          await db('players').truncate();
        });
     
        it('should add a player', async function() {
          await add({ name: 'Westbrook' })

          const players = await db('players');
          
          expect(players).toHaveLength(1);
        });

        it('should add the provided player', async function() {
            await add({ name: 'Westbrook' });
            await add({ name: 'Kyrie' });

            const players = await db('players');

            expect(players).toHaveLength(2);
            expect(players[0].name).toBe('Westbrook');
            expect(players[1].name).toBe('Kyrie');
        });

        it('should return the added player', async function() {
            let player = await add({ name: 'Kyrie' });
            
            expect(player.name).toBe('Kyrie');
            expect(player.id).toBeDefined();
        });

        describe('remove method', () => {
            it('should delete player from database', async () => {
                await add({ name: 'Westbrook' })
                await add({ name: 'Kyrie' })
                await Players.remove(1)
                await Players.remove(2)

                const players = await db('players');

                expect(players).toHaveLength(0);
            })
        })
    });
});
