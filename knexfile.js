// Update with your config settings.

module.exports = {
  client: "sqlite3",
  useNullAsDefault: true, // Flag REQUIRED for SQLite to work
  connection: {
      filename: "./data/produce.db3" // location of our db file
  },
}