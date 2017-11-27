let ne1 = require('../verses/1ne.js');
let ne2 = require('../verses/2ne.js');
let jac = require('../verses/jac.js');
let enos = require('../verses/enos.js');
let jar = require('../verses/jar.js');
let omni = require('../verses/omni.js');
let wom = require('../verses/wom.js');
let mos = require('../verses/mos.js');
let alma = require('../verses/alma.js');
let hel = require('../verses/hel.js');
let ne3 = require('../verses/3ne.js');
let ne4 = require('../verses/4ne.js');
let morm = require('../verses/morm.js');
let eth = require('../verses/eth.js');
let moro = require('../verses/moro.js');
let verses = [...ne1,...ne2,...jac,...enos,...jar,...omni,...wom,...mos,...alma,...hel,...ne3,...ne4,...morm,...eth,...moro];

exports.seed = function(knex, Promise) {
  return knex('verses').del()
    .then(function () {
      return knex('verses').insert(verses);
    });
};
