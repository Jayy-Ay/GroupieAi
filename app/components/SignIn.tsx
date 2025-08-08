// File featuring the SignIn Design and all it's Logic/Functions
import { useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";

// Types to appease typescript. Each varaiable must have a type defined
type SignInProps = {
  supabase: SupabaseClient;
};

export default function SignIn({ supabase }: SignInProps) {
  // Variables and Setters. User input from form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // See in Authentication / Users (Refresh at top right)
  const signUp = async () => {
    await supabase.auth.signUp({
      email: email,
      password: password,
    });
  };

  // After verify email, inspect element / Console / Application / Local Storage
  const signIn = async () => {
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };

  // See in aforementioned inspect element path above in signIn
  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="border border-black p-4 w-72 mx-auto rounded">
      <h3 className="mt-0 mb-2 text-lg font-semibold">Log In</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await signIn();
        }}
      >
        <label className="block text-left mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full mb-2 px-2 py-1 border rounded"
        />
        <label className="block text-left mb-1">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full mb-2 px-2 py-1 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded mt-2 mb-2"
        >
          Log In
        </button>
        <div>
          <a
            href="GA_forgot_password.html"
            className="underline text-blue-600"
          >
            Forgot password?
          </a>
          <button
            type="button"
            className="underline text-blue-600"
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
