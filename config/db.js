const mongoose = require('mongoose');
const config = require('config');

const MONGO_URI = config.get('mongo_uri');

const db = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify  : false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB conectado: ${conn.connection.host}`);
};

module.exports = db;