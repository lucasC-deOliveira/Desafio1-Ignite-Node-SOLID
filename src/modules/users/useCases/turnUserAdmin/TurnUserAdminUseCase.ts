import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userExist = this.usersRepository.findById(user_id)

    if(!userExist){
      throw new Error("user does not exists")
    }

    this.usersRepository.turnAdmin(userExist)

    return userExist

  }
}

export { TurnUserAdminUseCase };
