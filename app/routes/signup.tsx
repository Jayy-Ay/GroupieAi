import { useState } from "react";
import { useNavigate, useOutletContext } from "@remix-run/react";
import Alerts from "../components/Alerts";
import type { ActionFunctionArgs } from "@remix-run/node";
import { registerUser } from "../lib/registerUser";
import type { SupabaseClient } from "@supabase/supabase-js";

export async function action({ request }: ActionFunctionArgs) { // Action function; Handle form submission
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  let response;
  if (!username || !email || !password) {
    response = { error: "Username, email and password required." };
  } else {
    try {
      // References function in app\lib\registerUser.ts
      await registerUser({ username: String(username), email: String(email), password: String(password) });
      response = { success: true };
    } catch (err: any) {
      response = { error: err.message || "Registration failed." };
    }
  }
  return new Response(
    JSON.stringify(response),
    { headers: { "Content-Type": "application/json" } }
  );
};

export default function SignUpRoute() {
  const { supabase } = useOutletContext<{ supabase: SupabaseClient }>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new Error(error.message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      // First, sign up with Supabase
      await signUp();

      // Then, register in the database
      const res = await fetch("/signup", {
        method: "POST",
        body: new URLSearchParams({ username, email, password }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      let data;
      try {
        data = await res.json();
      } catch {
        setError("Unexpected server response. Please try again.");
        return;
      }
      if (data.error) {
        setError(data.error);
      } else if (data.success) {
        setSuccess(true);
        setTimeout(() => navigate("/root"), 1500);
        setRedirected(true);
      }
    } catch (err: any) {
      setError(err.message || "Registration failed.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border border-black p-4 w-72 mx-auto rounded">
        <h3 className="mt-0 mb-2 text-lg font-semibold">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <label className="block text-left mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="w-full mb-2 px-2 py-1 border rounded"
          />
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
            Sign Up
          </button>
          {error && (
            <Alerts type="error" title="Sign Up Error" message={error} />
          )}
          {success && (
            <Alerts type="success" title="Registration successful!" message="You can now sign in." />
          )}
        </form>
        <div className="flex flex-col items-center mt-2 gap-2">
          <button
            type="button"
            className="underline text-blue-600"
            onClick={() => navigate("/signin")}
          >
            Have an account? Sign In
          </button>
          <a href="#" className="underline text-blue-600 text-sm">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
