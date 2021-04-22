import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPass(password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, encryptedPass) => {
            if(err) throw reject(err)
            return resolve(encryptedPass)
        })
    });
}

export async function matchPass(hash: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        bcrypt.compare(password, hash, (err, same) => {
            if(err) throw reject(err)
            resolve(same)
        })
    })
}

//only for testing
// const hash = hashPass("1234");
// console.log(await(hash));

// const match =  matchPass(await(hash), "1234")
// console.log(await(match));
