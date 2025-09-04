import prisma from "./prisma";
import { User } from "./validateUser";

// Example registerUser function (update as needed)
export async function registerUser(user: User) {
    // You may want to hash the password before saving in production
    const newUser = await prisma.user.create({
        data: {
            email: user.email!,
            password: user.password!,
        },
    });
    return newUser;
}
