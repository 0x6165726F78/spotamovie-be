const mongoose = require('mongoose');
const nconf = require('./config/nconf');
const raccoon = require('raccoon');
const raccoonConnection = require('./config/raccoon.js');
// raccoon.connect(6379, nconf.get('REDIS_URL'));

// let options = {
//                 server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
//               };

mongoose.connect(nconf.get('MONGODB_URI'));
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('Connected to the db');
});

module.exports = db;
