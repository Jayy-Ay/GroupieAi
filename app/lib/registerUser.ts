import prisma from "./prisma";
import { User } from "./validateUser";

export async function registerUser(user: User) {    // Register a new user in the database using username, email, password
    const newUser = await prisma.user.create({
        data: {
            username: user.username,
            email: user.email!,
            password: user.password!,               // TODO: In the future, may want to hash password before saving in prod
        },
    });
    return newUser;
}