function errorHandler(
  err,
  _req,
  res,
  _next
) {
  console.log('ERRO CAPTURADO NO HANDLER GENERICO',err)
  return res.status(500).json(err);
}

module.exports = { errorHandler };
