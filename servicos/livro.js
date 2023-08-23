const fs = require("fs/promises");

async function getTodosLivros() {
	const data = await fs.readFile("livros.json", "utf-8");
	return JSON.parse(data);
}

async function getLivroPorId(id) {
	const data = await fs.readFile("livros.json", "utf-8");
	const livros = JSON.parse(data);
	const livroFiltrado = livros.find((livro) => livro.id === id);
	return livroFiltrado;
}

async function insereLivro(livroNovo) {
	const data = await fs.readFile("livros.json", "utf-8");
	const livros = JSON.parse(data);
	const novaListaDeLivros = [...livros, livroNovo];
	await fs.writeFile("livros.json", JSON.stringify(novaListaDeLivros));
}

async function modificaLivro(modificacoes, id) {
	const data = await fs.readFile("livros.json", "utf-8");
	const livrosAtuais = JSON.parse(data);
	const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);
	if (indiceModificado !== -1) {
		const conteudoMudado = {
			...livrosAtuais[indiceModificado],
			...modificacoes,
		};
		livrosAtuais[indiceModificado] = conteudoMudado;
		await fs.writeFile("livros.json", JSON.stringify(livrosAtuais));
	}
}

async function deletaLivroPorId(id) {
	const data = await fs.readFile("livros.json", "utf-8");
	const livros = JSON.parse(data);
	const livroFiltrados = livros.filter((livro) => livro.id !== id);
	await fs.writeFile("livros.json", JSON.stringify(livroFiltrados));
}

module.exports = {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	modificaLivro,
	deletaLivroPorId,
};
