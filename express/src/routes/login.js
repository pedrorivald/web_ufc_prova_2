import express from "express";
import LoginService from "../services/login.service.js";

const router = express.Router();

router.post("/", (request, response, next) => {
  LoginService.login(request, response);
});

export default router;
