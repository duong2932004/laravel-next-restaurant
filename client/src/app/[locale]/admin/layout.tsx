import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { RootLayoutProps } from "@/interface/RootLayoutProps";

export default function LayoutAdmin({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
