module.exports = {
  // database connection configs
  db: {
    client: "pg",
    connection: process.env.DB_URL || 
    "postgres://ocfnyejsdqnizf:5a23623c07b9842f0e72d200b080864944a13b5d1f574f7aaa8e75566448c5ae@ec2-174-129-227-128.compute-1.amazonaws.com:5432/d46bv4t0tfbn32?ssl=true&amp;sslfactory=org.postgresql.ssl.NonValidatingFactory",
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
