let ne1 = require('../verses/1ne.js');
let enos = require('../verses/enos.js');
let jar = require('../verses/jar.js');
let omni = require('../verses/omni.js');
let verses = [...ne1,...enos,...jar,...omni];

exports.seed = function(knex, Promise) {
  return knex('verses').del()
    .then(function () {
      return knex('verses').insert(verses);
    });
};
