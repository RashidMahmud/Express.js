import { Router, type Request, type Response } from "express";
import { userController } from "./user-controller";
import { pool } from "../../app";

const router = Router();

router.post("/", userController.createUser);
router.get("/api/users", );

export const userRoute = router;
