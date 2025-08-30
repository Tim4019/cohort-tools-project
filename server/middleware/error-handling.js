function errorHandler(err, req, res, next) {
    console.error("Error", req.method, req.path, err);

    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error." });
    }
  }

  function notFoundHandler(req, res, next) {
    res.status(404).json({ message: "Can't find the root" });
  }

  module.exports = { errorHandler, notFoundHandler };