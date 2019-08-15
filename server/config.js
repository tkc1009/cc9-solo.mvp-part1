module.exports = {
  // database connection configs
  db: {
    client: "pg",
    connection: process.env.DB_URL,
  },

  // GCP connection configs
  // pokeapi example
  // pokeapi: {
  //   baseURL: "https://pokeapi.co/api/v2",
  //   headers: {
  //     "Content-Type": "application/json; charset=UTF-8",
  //   },
  //   responseType: "json",
  // },

  // port for server to run on
  // express: {
  //   port: process.env.PORT || 4000,
  // },

  // timestamp format for our logs
  logger: {
    format: "dddd MMMM Do YYYY, h:mm:ss a",
  },
};
