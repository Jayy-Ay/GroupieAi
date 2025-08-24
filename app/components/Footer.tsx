/*  Footer Component
	This component renders the footer section of the dashboard layout.
	Use this for copyright, links, or other footer content.
	Author: Jared
*/

export function Footer() {
	return (
		<footer className="w-full p-4 text-center text-xs text-muted-foreground border-t">
			&copy; {new Date().getFullYear()} Your Company. All rights reserved.
		</footer>
	);
}
