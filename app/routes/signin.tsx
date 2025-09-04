import { useState } from "react";
import { useOutletContext, useNavigate } from "@remix-run/react";
import type { SupabaseClient } from "@supabase/supabase-js";

export default function SignInRoute() {
	const { supabase } = useOutletContext<{ supabase: SupabaseClient }>();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const signUp = async () => {
		await supabase.auth.signUp({
			email: email,
			password: password,
		});
	};

	const signIn = async () => {
		await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
	};

	const signOut = () => {
		supabase.auth.signOut();
	};

	return (
		<div className="flex h-screen items-center justify-center">
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
				</form>
				<div className="flex flex-col items-center mt-2 gap-2">
					<button
						type="button"
						className="underline text-blue-600"
						onClick={() => navigate("/signup")}
					>
						Don't have an account? Sign Up
					</button>
					<a href="#" className="underline text-blue-600 text-sm">Forgot password?</a>
				</div>
			</div>
		</div>
	);
}
