require('dotenv').config();
import { User } from "../entities/Users";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export async function sign(user: User):Promise<string> {
    return new Promise<string>((resolve, reject) => {
        jwt.sign({
            username: user.username,
            email: user.email,
            // exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, secret!, (err : any, encoded: any) => {
            if(err) return reject(err);
            resolve(encoded);
        });
    });
};

export async function decode(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        jwt.verify(token, secret!, (err, decodeed) => {
            if(err) return reject(err);
            resolve(decodeed as User);
        });
    });
};