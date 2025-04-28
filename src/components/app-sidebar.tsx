import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items
const items = [
  {
    title: "Profile Account",
    url: "/profile/account", // Update URL ke tab dalam profile
    icon: Home,
  },
  {
    title: "Waitlist",
    url: "/profile/waitlist", // Update URL ke tab dalam profile
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/profile/calendar", // Update URL ke tab dalam profile
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/profile/search", // Update URL ke tab dalam profile
    icon: Search,
  },
  {
    title: "Settings",
    url: "/profile/settings", // Update URL ke tab dalam profile
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="mt-7 w-64"> {/* Menambahkan lebar untuk sidebar agar lebih terstruktur */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-md"
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
