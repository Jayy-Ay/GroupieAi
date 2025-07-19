import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// .env needs to be 'piped' through loader to then be accessible to App()
export const loader = async () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
  };
  return { env };
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { env } = useLoaderData()                           // "Destructuring" .env
  const [supabase] = useState(() =>                         // useState() = singleton
    createClient(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!) // Client Side
  )

  // See in Authentication / Users (Refresh at top right)
  const signUp = () => {  
    supabase.auth.signUp({
      email: "jon@supabase.com",
      password: "s00perb$se1234",
    });
  };

  // After verify in email, see in inspect element / Console / Application / Local Storage
  const signIn = () => {  
    supabase.auth.signInWithPassword({
      email: "jon@supabase.com",
      password: "s00perb$se1234",
    });
  };

  // See in aformentioned inspect element path above in signIn
  const signOut = () => {
    supabase.auth.signOut();
  };
  
  return (
    <Layout>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign Ip</button>
      <button onClick={signOut}>Sign Out</button>
      <Outlet />
    </Layout>
  );
}