import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider
import { AppSidebar } from "@/components/app-sidebar"; // Import AppSidebar
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider> {/* Wrap SidebarProvider untuk mengatasi error */}
      <div className="flex">
        <AppSidebar /> {/* Sidebar hanya ada di halaman profile */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
}
