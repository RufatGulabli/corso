// const winston = require('winston');

var knex = require('knex')({
    client: 'pg',
    version: '5.7',
    connection: {
        host: '127.0.0.1',
        user: 'corso',
        password: '',
        database: 'corso'
    }
});

module.exports = knex;

// module.exports = function () {
//     mongoose.connect('mongodb://localhost/hometask', { useNewUrlParser: true })
//         .then(() => winston.info('Connected to MongoDB...'));
// }