
exports.up = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
      table.text("color")
  })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("fruits", (table) => {
        table.dropColumn("color")
    })
};
