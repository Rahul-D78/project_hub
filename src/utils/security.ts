import { User } from "../entities/Users";

export async function sanitization(user: User) {
    if(user.password) delete user.password
    return user
}