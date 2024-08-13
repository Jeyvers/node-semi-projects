const asyncWrapper = (fn) => {
 return async (req, res, next) => {
  try {
   await fn(req, res, next);
  } catch (error) {
   next({ msg: error });
  }
 };
};

module.exports = asyncWrapper;
