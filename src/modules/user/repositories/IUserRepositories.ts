import ICreateUserDTO from "../dtos/ICreateUserDTO";
import IGetUserDTO from "../dtos/IGetUserDTO";

interface IUserRepository {
  getAll: () => Promise<IGetUserDTO[]>;
  getById: (id: string) => Promise<IGetUserDTO>;
  create: (data: ICreateUserDTO) => Promise<IGetUserDTO>;
  update: (id: string, data: ICreateUserDTO) => Promise<IGetUserDTO>;
  deleteAll: () => Promise<IGetUserDTO[]>;
  delete: (id: string) => Promise<IGetUserDTO>;
}

export default IUserRepository;
