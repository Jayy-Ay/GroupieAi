import type { LoaderFunctionArgs } from "@remix-run/node";
import { createServerClient } from "@supabase/auth-helpers-remix";
import { useLoaderData } from "react-router-dom";

// Im using Supabase, so run in terminal 'npm i @supabase/supabase-js'
// This fetchs user profiles from Supabase databse (db)
export const loader = async ({request}: LoaderFunctionArgs) => {  
  const response = new Response();
  const supabase = createServerClient(  // Linked with createBrowserClient in root.tsx
    process.env.SUPABASE_URL!,          // From '.env' (! = always exist for everyone)
    process.env.SUPABASE_ANON_KEY!,
    { request, response }               // Using cookie to communicate with client/server
  );

  // 'await' = a promise therefore func needs 'async'
  // 'data' = all the shit in the 'User' db
  const { data } = await supabase.from('User').select();
  return {
    data,
    headers: response.headers, // So Supabase can update cookie when expired
  };
};
// Remember: Authentication / Policies / Create Policy to allow SELECT data from db

// Website's HTML, styling, functions will be shown. Everything in return() is displayed to users
export default function Dashboard() {
  const data = useLoaderData(); // GET data from loader()

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Display 'data' taken from loader() */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}