exports.up = function(knex) {
    return knex.schema.createTable('team_members', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('role').notNullable();
      table.string('image').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('team_members');
  };
  