
exports.up = async function(knex) {
  await knex.schema.alterTable("fruit", (table) => {
      table.text("color")
  })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("fruit", (table) => {
        table.dropColumn("color")
    })
};
