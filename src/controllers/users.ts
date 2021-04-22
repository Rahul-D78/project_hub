import { getRepository } from "typeorm";
import { User } from "../entities/Users";
import { hashPass, matchPass } from "../utils/password";
import { sanitization } from "../utils/security";

interface userData {
    email: string,
    password: string,
    username: string,
};

interface userLoginData {
    email: string,
    password: string
};

export async function getAllUsers(): Promise<User[]> {
    try {
        const repo = getRepository(User);
        const users = await repo.find();
        return (users);
    } catch (e) {
        throw e;
    }
};

export async function getUserByEmail(email: string): Promise<User> {
    try {
        const repo = getRepository(User);
        const user = await repo.findOne(email);
        
        if(!user) throw new Error("user with this email not exists")
        return await sanitization(user);
    } catch (e) {
        throw e;
    }
};

export async function registerUser(data: userData): Promise<User> {
    try {
        
        //validation step
        if(!data.email) throw new Error('Email field could not be blank');
        if(!data.password) throw new Error('password field could not be blank');
        if(!data.username) throw new Error('username field could not be blank');
        
        const repo = getRepository(User);
        const user = await repo.save(new User(
            data.email,
            data.username,
            await hashPass(data.password)
        ));
        return await sanitization(user);       
    } catch (e) {
        throw e;
    }
};
export async function loginUser(data: userLoginData): Promise<User> {
    try {

        if(!data.email) throw new Error("Email field could not be blank");
        if(!data.password) throw new Error("password field could not be blank");

        const repo = getRepository(User);
        const user = await repo.findOne(data.email)

        if(!user) throw new Error("user with this email does not exists");
        
        //check if password matches
        const match = await matchPass(user?.password!, data.password);
        if(match === false) throw new Error("password does not match");

        return sanitization(user)
    } catch (e) {
        throw e
    }
}

export async function updateUser(data: userData, email: string): Promise<User> {
    
    try {
        const repo = getRepository(User);
        const user = await repo.findOne(email);
        
        if(!user) throw new Error('No User with this email exists');

            (data.username != undefined) ? user.username = data.username : (user.username);
            (data.email != undefined) ? user.email = data.email : (user.email);
            (data.password != undefined) ? user.password = await hashPass(data.password) : (user.password);
        
        const updatedUser = await repo.save(user);  
        return await sanitization(updatedUser);
    } catch (e) {
        throw e;
    }
};
export async function deleteUser(email: string): Promise<User> {
    try {
        const repo = getRepository(User);
        const user = await repo.findOne(email);
        
        if(!user) throw new Error("user with this email not found");

        const deletedUser = await repo.remove(user);
        return await sanitization(deletedUser);
    } catch (e) {
        throw e;
    }
};