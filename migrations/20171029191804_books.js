exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", function (table) {
  table.increments('id').notNullable();
  table.string('book').notNullable();
  table.string('key').notNullable();
  table.integer('total_chapters');
  table.integer('total_verses');

});

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
