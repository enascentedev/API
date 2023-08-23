const {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	modificaLivro,
	deletaLivroPorId,
} = require("../servicos/livro");
async function getLivros(req, res) {
	try {
		const livros = await getTodosLivros();
		res.send(livros);
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}
async function getLivro(req, res) {
	try {
		const id = req.params.id;
		const livro = await getLivroPorId(id);
		res.send(livro);
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}

async function postLivro(req, res) {
	try {
		const livroNovo = req.body;
		await insereLivro(livroNovo);
		res.status(201);
		res.send("livro novo inserido com sucesso");
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}
async function patchLivro(req, res) {
	try {
		const id = req.params.id;
		const body = req.body;

		await modificaLivro(body, id);
		res.send("item modificado com sucesso");
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}
async function deleteLivro(req, res) {
	try {
		const id = req.params.id;
		await deletaLivroPorId(id);
		res.send("item deletado com sucesso");
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
}

module.exports = {
	getLivros,
	getLivro,
	postLivro,
	patchLivro,
	deleteLivro,
};
