import { Request, Response } from "express";

import DeleteAllUsersUseCase from "./deleteAllUsersUseCase";

class DeleteAllUsersController {
  async handle(_: Request, res: Response): Promise<Response> {
    const deleteAllUsersUseCase = new DeleteAllUsersUseCase();
    const users = await deleteAllUsersUseCase.execute();
    return res.json(users);
  }
}

export default DeleteAllUsersController;
