exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('players')
    .truncate()
    .then(function() {
      return knex('players').insert([
        { name: 'Lebron' },
        { name: 'Kobe' },
        { name: 'Jordan' },
        { name: 'Harden' },
      ]);
    });
};

