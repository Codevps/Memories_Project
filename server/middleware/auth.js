import jwt from "jsonwebtoken";
import { secret } from "../secret.js";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      /*custom authentication */
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      /*google authentication*/
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
