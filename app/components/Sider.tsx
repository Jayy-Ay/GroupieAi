/*  Sider Component
    This component renders the sidebar (sider) for the dashboard layout.
    Use this for navigation links or additional controls.
    Author: Jared
*/
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from '~/components/ui/sidebar'

export function Sider() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>{/* Your custom header content */}</SidebarHeader>
        <SidebarContent>{/* Your sidebar menu or navigation */}</SidebarContent>
        <SidebarFooter>{/* Your custom footer content */}</SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
