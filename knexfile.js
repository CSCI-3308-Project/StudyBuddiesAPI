module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
      database: 'studybuddies',
      user: 'postgres',
      //password: ''
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: 'postgres://qberjqfjwamabb:12ced311acc0ac029cca5121e952abb4bd8b371510b42eaf4babbee9ce319d3f@ec2-184-72-239-186.compute-1.amazonaws.com:5432/d3lcoi1564acr9',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};
