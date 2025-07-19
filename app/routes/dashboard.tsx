import { createClient } from "@supabase/supabase-js";
import { useLoaderData } from "react-router-dom";

// Im using Supabase, so run in terminal 'npm i @supabase/supabase-js'
// This fetchs user profiles from Supabase databse (db) =
export const loader = async () => {
  const supabase = createClient(
    // From '.env' (! = always exist for everyone)
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  // 'await' = a promise therefore func needs 'async'
  // 'data' = all the shit in the 'test' db
  const { data } = await supabase.from('test').select();
  return {
    data,
  };
};
// Remember: Authentication / Policies / Create Policy to allow SELECT data from db

// Website's HTML, styling, and functions will be shown. Everythigng in return() is displayed to users
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