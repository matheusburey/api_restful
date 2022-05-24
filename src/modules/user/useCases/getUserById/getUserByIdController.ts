import { Request, Response } from "express";

import GetUserByIdUseCase from "./getUserByIdUseCase";

class GetUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const getUserByIdUseCase = new GetUserByIdUseCase();

    const [user]: any = await getUserByIdUseCase.execute(id);

    if (!user) {
      return res.status(404).json({ message: "not found user" });
    }

    return res.json(user);
  }
}

export default GetUserByIdController;
