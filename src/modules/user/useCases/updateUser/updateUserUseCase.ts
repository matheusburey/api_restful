import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IGetUserDTO from "../../dtos/IGetUserDTO";
import UserRepository from "../../repositories/implementions/userRepositories";

class UpdateUserUseCase {
  execute(id: string, data: ICreateUserDTO): Promise<IGetUserDTO> {
    return new UserRepository().update(id, data);
  }
}

export default UpdateUserUseCase;
