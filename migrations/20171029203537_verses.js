exports.up = function(knex, Promise) {
  return knex.schema.createTable("verses", function (table) {
  table.increments('id').notNullable();
  table.text('text').notNullable();
  table.integer('book_id').references('books.id').notNullable().onDelete('cascade');
  table.integer('chapter').notNullable();
  table.integer('verse').notNullable();

});

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("verses");
};
