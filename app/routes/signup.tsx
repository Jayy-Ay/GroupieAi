import { useState } from "react";
import { useNavigate, useActionData, Form } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { registerUser } from "../lib/registerUser";

export async function action({ request }: ActionFunctionArgs) { // Action function; Handle form submission
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  if (!username || !email || !password) {
    return { error: "Username, email and password required." };
  }
  try {
    // References function in app\lib\registerUser.ts
    await registerUser({ username: String(username), email: String(email), password: String(password) });
    return { success: true };
  } catch (err: any) {
    return { error: err.message || "Registration failed." };
  }
};

export default function SignUpRoute() {
  const actionData = useActionData<typeof action>();    // Get data returned from action function
  const navigate = useNavigate();                       // A in-built React hook to navigate
  const [redirected, setRedirected] = useState(false);  // Track if already redirected

  // Redirect to root after success
  if (actionData?.success && !redirected) {
    setTimeout(() => navigate("/root"), 1500);  // Wait 1.5 seconds before redirecting to /root
    setRedirected(true);                        // Ensure we only redirect once
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border border-black p-4 w-72 mx-auto rounded">
        <h3 className="mt-0 mb-2 text-lg font-semibold">Sign Up</h3>
        <Form method="post">
          <label className="block text-left mb-1">Username:</label>
          <input
            type="text"
            name="username"
            required
            className="w-full mb-2 px-2 py-1 border rounded"
          />
          <label className="block text-left mb-1">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mb-2 px-2 py-1 border rounded"
          />
          <label className="block text-left mb-1">Password:</label>
          <input
            type="password"
            name="password"
            required
            className="w-full mb-2 px-2 py-1 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mt-2 mb-2"
          >
            Sign Up
          </button>
          {/* Show error message if exists */}
          {actionData?.error && (
            <div className="text-red-500 text-sm">{actionData.error}</div>
          )}
          {actionData?.success && (
            <div className="text-green-600 text-sm">
              Registration successful! You can now sign in.
            </div>
          )}
        </Form>
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
