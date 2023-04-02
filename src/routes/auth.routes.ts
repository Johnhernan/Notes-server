import {Router} from "express";
import authUser from "../controllers/Auth/Auth.controller";

const authRouter = Router();

authRouter.post("/", authUser.authUser);
//notebookRouter.get("/", NotebookController.getNotebooks);

export default authRouter;