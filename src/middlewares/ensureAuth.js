const jwt = require("jsonwebtoken");
const JWT_SECRET =  "Jean careca e Leonardo cabelo de miojo";

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) return response.status(401).json({ message: "Token missing" });

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    request.user = payload;

    return next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid token" });
  }
};
