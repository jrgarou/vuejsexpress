module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vuejsexpress',
    user: process.env.DB_USER || 'vuejsexpress',
    password: process.env.DB_PASS || 'vuejsexpress',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'locahost',
      storage: process.env.DIALECT || './vuejsexpress.sqlite'
    }
  }
}
