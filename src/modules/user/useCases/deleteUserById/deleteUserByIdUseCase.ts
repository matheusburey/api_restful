import IGetUserDTO from "../../dtos/IGetUserDTO";
import UserRepository from "../../repositories/implementions/userRepositories";

class DeleteUserByIdUseCase {
  execute(id: string): Promise<IGetUserDTO> {
    return new UserRepository().delete(id);
  }
}

export default DeleteUserByIdUseCase;
