import { Request, Response } from "express";

import DeleteUserByIdUseCase from "./deleteUserByIdUseCase";

class DeleteUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteUserByIdUseCase = new DeleteUserByIdUseCase();
    const [user]: any = await deleteUserByIdUseCase.execute(id);

    if (!user) {
      return res.status(404).json({ message: "not found user" });
    }

    return res.json(user);
  }
}

export default DeleteUserByIdController;
