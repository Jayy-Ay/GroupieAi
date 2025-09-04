import prisma from "./prisma";
import { createBrowserClient } from "@supabase/auth-helpers-remix";

export interface User {   // This defines what a User object looks like
  id?: string;
  username?: string;
  email?: string;
  name?: string;
  password?: string;
}

export async function validateUser(user: User) {    // Validate user against the database
  const foundUser = await prisma.user.findUnique({  // Check if user exists in db
    where: {                                        // Kinda like a SQL query
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
  const mappedUser: User = {                      // Map Supabase user to our User interface above
    id: user.id,
    email: user.email ?? "",                      // '??' means if null/undefined, use empty string
    name: user.user_metadata?.name ?? "",
  };
  const isValid = await validateUser(mappedUser); // Validate user against our db
  return isValid ? mappedUser : null;
}

export function setUser(user: User | null) {            // Store user in localStorage (or sessionStorage)
  if (user) {
    localStorage.setItem("user", JSON.stringify(user)); // Convert user JSON object to string
  } else {
    localStorage.removeItem("user");                    // Remove user from storage if null
  }
}
