exports.up = async function(knex) {
  await knex.schema.createTable("fruits", () => {
      table.increments("id")
      table.text("name").notNull().unique()
      table.float("avgWeightOz").notNull()
      table.boolean("delicious").notNull().default(true)
  })
};

exports.down = async function(knex) {
  await knex.schema.createTable("fruits")
};
