const express = require("express");
const rotaLivro = require("./rotas/livro");
const asyncErrors = require("express-async-errors");
const app = express();
app.use(express.json());

app.use("/livros", rotaLivro);
const errorMiddleware = require("./helpers/errorMiddleware");
app.use(errorMiddleware);
app.use((err, req, res, next) => {
	console.error(err); // Registrar o erro para fins de depuração

	// Tratar o erro e enviar uma resposta adequada ao cliente
	res.status(500).json({ error: "Ocorreu um erro interno." });
});
const port = 8000;

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
});
