
exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
      tbl.increments('resources_id');
      tbl.string('resources_name')
      .notNullable()
      .unique();
      tbl.string('resources_description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
