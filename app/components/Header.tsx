/*  Header Component
	This component renders the header section of the dashboard layout.
	Use this for navigation, branding, or user info.
	Author: Jared
*/

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="w-full p-4 border-b flex items-center justify-between">
      <div className="font-bold text-lg">{children}</div>
      <nav>{/* Navigation links or user info here */}</nav>
    </header>
  )
}
