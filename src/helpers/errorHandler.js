const errorHandler = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};
class NotFoundError extends Error {
  constructor() {
    super();
    this.code = 404;
    this.status = "Not Found";
  }
}
class BadRequestError extends Error {
  constructor(message) {
    super();
    this.code = 400;
    this.status = "Bad Request";
    this.message = message;
  }
}

module.exports = { errorHandler, NotFoundError, BadRequestError };
