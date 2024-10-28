import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import {
    getFichas,
    createFicha,
    getFicha,
    deleteFicha,
    updateFicha,
} from "../controllers/fichas.controller.js";

const router = Router();

router.get("/fichas", authREquired, getFichas);

router.post("/fichas", authREquired, createFicha);

router.get("/fichas/:id", authREquired, getFicha);

router.delete("/fichas/:id", authREquired, deleteFicha);

router.put("/fichas/:id", authREquired, updateFicha);

export default router;