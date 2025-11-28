require('dotenv').config();
const http = require('http');
const { connectDB } = require('./config/db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
  });
}

start();
