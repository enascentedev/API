const express = require("express");
const mongoose = require("mongoose"); // Novo
const rotaLivro = require("./rotas/livro");
const rotaUsuario = require("./rotas/usuarios");
const asyncErrors = require("express-async-errors");

const token = jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET);
require("dotenv").config();

// Conexão com MongoDB - Novo
mongoose
	.connect(process.env.DB_URI, {
		user: process.env.DB_USER,
		pass: process.env.DB_PASSWORD,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/livros", rotaLivro);
app.use("/usuarios", rotaUsuario);

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
