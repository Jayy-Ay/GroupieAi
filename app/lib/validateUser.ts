import prisma from "./prisma";
import { createBrowserClient } from "@supabase/auth-helpers-remix";

export interface User {
  id?: string;
  username?: string;
  email?: string;
  name?: string;
  password?: string;
}

export async function validateUser(user: User) {
  const foundUser = await prisma.user.findUnique({
    where: {
      email: user.email,
      password: user.password
    }
  });

  if (foundUser) {
    console.log("User is valid.");
    return true;
  }
  return false;
}

// Fetch user from Supabase Auth
export async function getUser(supabase: ReturnType<typeof createBrowserClient>): Promise<User | null> {
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return null;
  // Map Supabase user to our User interface
  const mappedUser: User = {
    id: user.id,
    email: user.email ?? "",
    name: user.user_metadata?.name ?? "",
  };
  const isValid = await validateUser(mappedUser);
  return isValid ? mappedUser : null;
}

// Store user in localStorage (or sessionStorage)
export function setUser(user: User | null) {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
}
