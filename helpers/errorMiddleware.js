module.exports = (err, req, res, next) => {
	console.error(err); // Registrar o erro para fins de depuração

	// Tratar o erro e enviar uma resposta adequada ao cliente
	res.status(500).json({ error: "Ocorreu um erro interno." });
};
