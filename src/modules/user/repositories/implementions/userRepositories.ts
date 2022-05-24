import connectionDb from "../../../../database";
import ICreateUser from "../../dtos/ICreateUserDTO";
import IGetUserDTO from "../../dtos/IGetUserDTO";
import IUserRepository from "../IUserRepositories";

class UserRepository implements IUserRepository {
  private repository = connectionDb;

  async getAll(): Promise<IGetUserDTO[]> {
    return this.repository.select().from("users");
  }

  async getById(id: string): Promise<IGetUserDTO> {
    return this.repository.select().where({ id }).from("users");
  }

  async create(data: ICreateUser): Promise<IGetUserDTO> {
    return this.repository.insert(data, "*").into("users");
  }

  async update(id: string, data: ICreateUser): Promise<IGetUserDTO | any> {
    return this.repository("users").where({ id }).update(data, "*");
  }

  async deleteAll(): Promise<IGetUserDTO[]> {
    return this.repository("users").del("*");
  }

  async delete(id: string): Promise<IGetUserDTO | any> {
    return this.repository("users").where({ id }).del("*");
  }
}

export default UserRepository;
