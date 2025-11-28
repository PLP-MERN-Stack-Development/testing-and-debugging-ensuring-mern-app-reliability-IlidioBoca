const mongoose = require('mongoose');

async function connectDB(uri) {
  const mongoUri = uri || process.env.MONGO_URI || 'mongodb://localhost:27017/mern_testing_project';
  await mongoose.connect(mongoUri);
  console.log('MongoDB conectado (envio de testes/produção)');
}

module.exports = { connectDB };
