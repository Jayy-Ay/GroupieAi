/*  Body Component
    This component represents the main content area of the dashboard layout.
    Place the core content of the dashboard here.
    Author: Jared
*/

import React from "react";

/* children let you render componenents that are inside it. SO you can do:
    <Body>
    <div>Hello!</div>
    </Body>
    With not much issue 
*/
export function Body({ children }: { children?: React.ReactNode }) {
	return (
		<main className="flex-1 p-4">
			{children ? children : <div>Main content goes here.</div>}
		</main>
	);
}
