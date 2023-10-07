// helpers/authMiddleware.js

const jwt = require("jsonwebtoken");

module.exports = function authenticate(req, res, next) {
	const token = req.header("Authorization")?.replace("Bearer ", "");
	if (!token) {
		return res.status(401).send("Acesso negado. Nenhum token fornecido.");
	}

	try {
		const decoded = jwt.verify(token, "secreto");
		req.user = decoded;
		next();
	} catch (error) {
		res.status(401).send("Token inválido");
	}
};
