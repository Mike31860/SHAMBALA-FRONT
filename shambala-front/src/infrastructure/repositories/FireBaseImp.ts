import { User } from "../../domain/models/user";
import { AuthRepository } from "../../domain/repositories/auth";
import firebaseApp from "../../config/firebaseApp";
import { signInWithEmailAndPassword, getAuth, Auth } from "firebase/auth";


export class FirebaseAuthRepository implements AuthRepository {
  private authInstance: Auth;
  constructor() {
    this.authInstance = getAuth(firebaseApp);
  }

  async getToken(user: User): Promise<string> {
   const creds = await  signInWithEmailAndPassword(
      this.authInstance,
      user.userName,
      user.password
    );

    return creds.user.getIdToken()
  }


}
