import { Request, Response } from "express";

import GetAllUserCase from "./getAllUsersUseCase";

class GetAllUsersController {
  async handle(_: Request, res: Response): Promise<Response> {
    const users = await new GetAllUserCase().execute();
    return res.json({ users });
  }
}

export default GetAllUsersController;
