const express = require("express");
const { getLivros, getLivro, postLivro } = require("../contraladores/livro");
const router = express.Router();

router.get("/", getLivros);
router.get("/:id", getLivro);

router.post("/", postLivro);

router.patch("/", (req, res) => {
	res.send("Rota de atualização de livros PATCH");
});
router.delete("/", (req, res) => {
	res.send("Rota de atualização de livros DELETE");
});
module.exports = router;
