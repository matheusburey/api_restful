import IGetUserDTO from "../../dtos/IGetUserDTO";
import UserRepository from "../../repositories/implementions/userRepositories";

class GetAllUserCase {
  execute(): Promise<IGetUserDTO[]> {
    return new UserRepository().getAll();
  }
}

export default GetAllUserCase;
