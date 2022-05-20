import ICreateUser from "../../dtos/ICreateUserDTO";
import IGetUserDTO from "../../dtos/IGetUserDTO";
import UserRepository from "../../repositories/implementions/userRepositories";

class CreateUserCase {
  execute({ name, email }: ICreateUser): Promise<IGetUserDTO> {
    return new UserRepository().create({ name, email });
  }
}

export default CreateUserCase;
