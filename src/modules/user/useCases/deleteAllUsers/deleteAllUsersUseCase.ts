import IGetUserDTO from "../../dtos/IGetUserDTO";
import UserRepository from "../../repositories/implementions/userRepositories";

class DeleteAllUsersUseCase {
  execute(): Promise<IGetUserDTO[]> {
    return new UserRepository().deleteAll();
  }
}

export default DeleteAllUsersUseCase;
