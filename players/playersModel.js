const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    findById,
    remove,
  };

  
  function find() {
    return db('players').select('id', 'name');
  }
  
  async function add(user) {
    const [id] = await db('players').insert(user);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('players')
      .where({ id })
      .first();
  }
  
  function remove(id) {
    return db('players')
      .where({ id })
      .delete();
  }