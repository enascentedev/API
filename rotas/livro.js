const express = require("express");
const authenticate = require("../helpers/authMiddleware"); // Importe o middleware
const {
	getLivros,
	getLivro,
	postLivro,
	patchLivro,
	deleteLivro,
} = require("../contraladores/livro");
const router = express.Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.get("/", authenticate, getLivros); // Proteja a rota com o middleware

router.post("/", postLivro);

router.patch("/:id", patchLivro);
router.delete("/:id", deleteLivro);
module.exports = router;
