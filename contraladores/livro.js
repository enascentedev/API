const asyncErrors = require("express-async-errors");
const {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	modificaLivro,
	deletaLivroPorId,
} = require("../servicos/livro");

async function getLivros(req, res) {
	const livros = await getTodosLivros();
	res.send(livros);
}

async function getLivro(req, res) {
	const id = req.params.id;
	const livro = await getLivroPorId(id);
	res.send(livro);
}

async function postLivro(req, res) {
	const livroNovo = req.body;
	await insereLivro(livroNovo);
	res.status(201).send("livro novo inserido com sucesso");
}

async function patchLivro(req, res) {
	const id = req.params.id;
	const body = req.body;

	await modificaLivro(body, id);
	res.send("item modificado com sucesso");
}

async function deleteLivro(req, res) {
	const id = req.params.id;
	await deletaLivroPorId(id);
	res.send("item deletado com sucesso");
}

module.exports = {
	getLivros,
	getLivro,
	postLivro,
	patchLivro,
	deleteLivro,
};
