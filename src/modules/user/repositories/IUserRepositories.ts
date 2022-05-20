import ICreateUserDTO from "../dtos/ICreateUserDTO";
import IGetUserDTO from "../dtos/IGetUserDTO";

interface IUserRepository {
  getAll: () => Promise<IGetUserDTO[]>;
  getById: (id: number) => Promise<IGetUserDTO>;
  create: (data: ICreateUserDTO) => Promise<IGetUserDTO>;
  update: (id: number, data: ICreateUserDTO) => Promise<IGetUserDTO>;
  deleteAll: () => Promise<IGetUserDTO[]>;
  delete: (id: number) => Promise<IGetUserDTO>;
}

export default IUserRepository;
