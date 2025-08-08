// Special File that 'Wraps' around out application
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRevalidator } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { createBrowserClient } from "@supabase/auth-helpers-remix";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import "./tailwind.css";
import SignIn from "app/components/SignIn";

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

// .env needs to be 'piped' through loader to then be accessible to App()
export const loader = async () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
  };
  return { env };
};

export default function App() {
  // Linked with createServerClient in routes/dashboard.tsx
  const { env } = useLoaderData();  // "Destructuring" .env. Completely fine red error
  const [supabase] = useState(() => // useState() makes singleton
    createBrowserClient(            // X Local Storage ✔ Cookies
      env.SUPABASE_URL!,
      env.SUPABASE_ANON_KEY!
    )
  );

  // Data updating immediately whenever signing in or out and calling loaders
  const revalidator = useRevalidator();
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      // Call loaders for any routues active on the page
      revalidator.revalidate();
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [supabase, revalidator]);

  return (
    <Layout>
      <div className="bg-gray-50 text-gray-900">
        <h1 className="text-2xl font-bold mb-4">GroupieAI</h1>
        <p className="mb-6">All your AI chatbots in one place.</p>
          {/* SignIn Code is in app\components\SignIn.tsx */}
          <SignIn supabase={supabase} />
        <Outlet />
      </div>
    </Layout>
  );
}