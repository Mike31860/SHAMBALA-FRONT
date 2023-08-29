import { LoginUseCase } from "../domain/useCases/login";
import { LoginCredentials } from "../domain/useCases/login/model";
import firebaseApp from "../config/firebaseApp";
import { AuthRepository } from "../domain/repositories/auth";

export class FirebaseLoginUseCase implements LoginUseCase {

    
  constructor(private authRepository: AuthRepository) {}

  invoke(credentials: LoginCredentials): Promise<string> {
    //firebascode
    return this.authRepository.getToken(credentials);
  }
}
