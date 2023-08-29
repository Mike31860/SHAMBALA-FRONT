import { User } from "../models/user";


export interface AuthRepository {
    getToken(user:User): Promise<string>;
    
}