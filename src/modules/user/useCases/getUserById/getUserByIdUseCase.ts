import IGetUserDTO from "../../dtos/IGetUserDTO";
import UserRepository from "../../repositories/implementions/userRepositories";

class GetUserByIdUseCase {
  execute(id: string): Promise<IGetUserDTO> {
    return new UserRepository().getById(id);
  }
}

export default GetUserByIdUseCase;
