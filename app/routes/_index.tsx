import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  // TODO add a proper onboarding flow later
  return redirect("/signin"); // Always redirect to /signin
} 

export default function Index() {
  // This will never render because of the redirect
  return null;
}
