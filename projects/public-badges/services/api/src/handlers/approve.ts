import { Handler } from "aws-lambda";

const approve: Handler = (event, _context, callback) => {
  callback(null, event);
};

export default approve;
