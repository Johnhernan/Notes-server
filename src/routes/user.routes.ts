import {Router} from "express";
import UserController from '../controllers/Users/User.controller';

const userRouter = Router();

// User routes
userRouter.post("/", UserController.createUser);
userRouter.get("/u", UserController.getUser);
userRouter.delete("/u", UserController.deleteUser);
userRouter.patch("/u", UserController.updateUser);

export default userRouter;