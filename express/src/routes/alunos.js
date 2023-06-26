import express from "express";
import alunoServiceMongo from "../services/aluno.services.mongo.js";

const router = express.Router();

router.get("/listar", (request, response, next) => {
  alunoServiceMongo.list(request, response);
});

router.post("/register", (request, response, next) => {
  alunoServiceMongo.register(request, response);
});

router.put("/update/:id", (request, response, next) => {
  alunoServiceMongo.update(request, response);
});

router.delete("/delete/:id", function (request, response, next) {
  alunoServiceMongo.delete(request, response);
});

router.get("/retrieve/:id", function (request, response, next) {
  alunoServiceMongo.retrieve(request, response);
});

export default router;
