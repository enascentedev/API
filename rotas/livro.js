const express = require("express");
const { getLivros } = require("../contraladores/livro");
const router = express.Router();

router.get("/", getLivros);

router.post("/", (req, res) => {});

router.patch("/", (req, res) => {
	res.send("Rota de atualização de livros PATCH");
});
router.delete("/", (req, res) => {
	res.send("Rota de atualização de livros DELETE");
});
module.exports = router;
