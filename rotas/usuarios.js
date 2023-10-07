// rotas/usuarios.js

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js"); // Importe o modelo de usuário que criamos

const router = express.Router();

router.post("/register", async (req, res) => {
	const { username, password } = req.body;

	const existingUser = await User.findOne({ username });
	if (existingUser) {
		return res.status(409).send("O usuário já existe");
	}

	const user = new User({ username, password });
	await user.save();

	res.status(201).send("Usuário registrado com sucesso");
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	const user = await User.findOne({ username });
	if (!user) {
		return res.status(400).send("Usuário não encontrado");
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).send("Senha inválida");
	}

	const token = jwt.sign({ id: user._id }, "secreto", { expiresIn: "1d" });
	res.send({ token });
});

module.exports = router;
