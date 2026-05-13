class ApiError extends Error {
  constructor(
    message = 'Something went wrong!',
    statusCode,
    stackTrace,
    errors,
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;

    this.errors = errors;
    this.data = null;
    this.success = false;

    if (stackTrace) {
      this.stackTrace = stackTrace;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
