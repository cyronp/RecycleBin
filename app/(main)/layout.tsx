import { Header, AppSidebar } from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
