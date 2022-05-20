import { Router } from "express";

import CreateUsersController from "../modules/user/useCases/createUser/createUserController";
import DeleteAllUsersController from "../modules/user/useCases/delteAllUsers/deleteAllUsersController";
import DeleteUserByIdController from "../modules/user/useCases/delteUserById/deleteUserByIdController";
import GetAllUsersController from "../modules/user/useCases/getAllUsers/getAllUsersController";
import GetUserByIsController from "../modules/user/useCases/getUserById/getUserByIdController";
import UpdateUserController from "../modules/user/useCases/updateUser/updateUserController";

const userRouter = Router();

userRouter.get("", new GetAllUsersController().handle);
userRouter.get("/:id", new GetUserByIsController().handle);

userRouter.post("", new CreateUsersController().handle);

userRouter.put("/:id", new UpdateUserController().handle);

userRouter.delete("", new DeleteAllUsersController().handle);
userRouter.delete("/:id", new DeleteUserByIdController().handle);

export default userRouter;
