let ne1 = require('../verses/1ne.js');
let enos = require('../verses/enos.js');
let jar = require('../verses/jar.js');
let omni = require('../verses/omni.js');
let ne4 = require('../verses/4ne.js');
let verses = [...ne1,...enos,...jar,...omni,...ne4];

exports.seed = function(knex, Promise) {
  return knex('verses').del()
    .then(function () {
      return knex('verses').insert(verses);
    });
};
