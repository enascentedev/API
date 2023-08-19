const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Rota de leitura de livros GET");
});

router.post("/", (req, res) => {
	res.send("Rota de criação de livros POST");
});

router.patch("/", (req, res) => {
	res.send("Rota de atualização de livros PATCH");
});
router.delete("/", (req, res) => {
	res.send("Rota de atualização de livros DELETE");
});
module.exports = router;
