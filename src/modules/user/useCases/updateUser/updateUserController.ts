import { Request, Response } from "express";

import UpdateUserUseCase from "./updateUserUseCase";

class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updateUserUseCase = new UpdateUserUseCase();

    const [user]: any = await updateUserUseCase.execute(id, req.body);

    if (!user) {
      return res.status(404).json({ message: "not found user" });
    }

    return res.json(user);
  }
}

export default UpdateUserController;
