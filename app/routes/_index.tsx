import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  // Always redirect to /signin
  return redirect("/signin");
}

export default function Index() {
  // This will never render because of the redirect
  return null;
}
