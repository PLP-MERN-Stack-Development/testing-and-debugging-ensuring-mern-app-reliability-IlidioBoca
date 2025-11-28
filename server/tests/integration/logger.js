function logger(req, res, next) {
  // simples log de request para depuração
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger;
