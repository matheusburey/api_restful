import { Request, Response } from "express";

import CreateUserCase from "./createUserUseCase";

class CreateUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createUsersUseCase = new CreateUserCase();
    const [users]: any = await createUsersUseCase.execute(req.body);

    return res.status(201).json(users);
  }
}

export default CreateUsersController;
