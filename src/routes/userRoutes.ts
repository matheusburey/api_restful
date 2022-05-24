import { Router } from "express";

import { validateMiddleware } from "../middlewares/validateMiddleware";
import CreateUsersController from "../modules/user/useCases/createUser/createUserController";
import DeleteAllUsersController from "../modules/user/useCases/deleteAllUsers/deleteAllUsersController";
import DeleteUserByIdController from "../modules/user/useCases/deleteUserById/deleteUserByIdController";
import GetAllUsersController from "../modules/user/useCases/getAllUsers/getAllUsersController";
import GetUserByIdController from "../modules/user/useCases/getUserById/getUserByIdController";
import UpdateUserController from "../modules/user/useCases/updateUser/updateUserController";
import { userFieldsSchemas } from "../schemas/userFieldsSchemas";

const userRouter = Router();

userRouter.get("", new GetAllUsersController().handle);
userRouter.get("/:id", new GetUserByIdController().handle);

userRouter.post(
  "",
  validateMiddleware(userFieldsSchemas),
  new CreateUsersController().handle
);

userRouter.put(
  "/:id",
  validateMiddleware(userFieldsSchemas),
  new UpdateUserController().handle
);

userRouter.delete("", new DeleteAllUsersController().handle);
userRouter.delete("/:id", new DeleteUserByIdController().handle);

export default userRouter;
