const express = require("express");
const mongoose = require("mongoose"); // Novo
const rotaLivro = require("./rotas/livro");
const asyncErrors = require("express-async-errors");

// Conexão com MongoDB - Novo
mongoose
	.connect("mongodb://localhost:27017/livrosAPI", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/livros", rotaLivro);

const errorMiddleware = require("./helpers/errorMiddleware");
app.use(errorMiddleware);

app.use((err, req, res, next) => {
	console.error(err); // Registrar o erro para fins de depuração
	res.status(500).json({ error: "Ocorreu um erro interno." });
});

const port = 8000;

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
});
