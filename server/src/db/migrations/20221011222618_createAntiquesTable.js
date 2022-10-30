/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('antiques',function (t){
        t.increments('id').primary()
        t.string("quantity").notNullable()
        t.string('name').notNullable()
        t.string('category')
        t.string('value')
        t.string('material')
        t.string('color')
        t.string('style')
        t.string('brand')
        t.string('model')
        t.string('timePeriod')
        t.string('condition')
        t.string('origin')
        t.string('purpose')
        t.string('owner')
        t.string('history')
        t.string('size')
        t.string('comment')
        t.timestamps(true,true)
    })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('antiques')
  
};
