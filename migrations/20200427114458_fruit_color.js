
exports.up = await function(knex) {
  await knex.schema.alterTable("fruit", (table) => {
      table.text("color")
  })
};

exports.down = await function(knex) {
    await knex.schema.alterTable("fruit", (table) => {
        table.dropColumn("color")
    })
};
