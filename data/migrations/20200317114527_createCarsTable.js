
exports.up = function(knex) {
    return knex.schema.createTable('cars', (table) => {
        // make a column called id which is primary key integer auto-incrementing unique etc
        table.increments('id').primary()
      
        table.text('registration', 7).unique().notNullable()
        table.text('make').notNullable()
        table.text('model').notNullable()
        table.integer('milage').notNullable()
        table.boolean('manualtransmission')
        table.text('status')
       
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
