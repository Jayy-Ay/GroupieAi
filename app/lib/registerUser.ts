import prisma from "./prisma";
import { User } from "./validateUser";

// Example registerUser function (update as needed)
export async function registerUser(user: User) {
    // You may want to hash the password before saving in production
    if (!user.username) {
        throw new Error("Username is required");
    }
    const newUser = await prisma.user.create({
        data: {
            username: user.username,
            email: user.email!,
            password: user.password!,
        },
    });
    return newUser;
}
