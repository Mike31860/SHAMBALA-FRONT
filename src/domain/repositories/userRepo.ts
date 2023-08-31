import { User } from "../models/user";

export interface UserRepository {

    findAll() : Promise<User[]>;



}