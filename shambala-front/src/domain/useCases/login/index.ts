import { AuthRepository } from "../../repositories/auth";
import { LoginCredentials } from "./model";


export class LoginUseCase  {


  constructor(private authRepository: AuthRepository) {}

  invoke(credentials: LoginCredentials): Promise<string> {
    return this.authRepository.getToken(credentials);
  }
}

