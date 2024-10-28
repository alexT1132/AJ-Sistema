import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import {
  getLocalidades,
  createLocalidad,
  getLocalidad,
  deleteLocalidad,
} from "../controllers/localidades.controller.js";

const router = Router();

router.get("/localidades", authREquired, getLocalidades);

router.get("/localidades/:id", authREquired, getLocalidad);

router.post("/localidades", authREquired, createLocalidad);

router.delete("/localidades/:id", authREquired, deleteLocalidad);

export default router;