"use client";

import { Sidebar } from "@/components/ui/sidebar";
import WatchlistCard from "@/components/watchlistcard";
import { useEffect, useState } from "react";


export default function Profile() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"account" | "watchlist" | "lorem1" | "lorem2">("account");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userSession");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({ name: parsedUser.name, email: "" });
    }
  }, []);

  // Buat function generate class tab
  const tabClass = (tab: string) =>
    `p-2 w-full h-full px-10 rounded-3xl ${
      activeTab === tab ? "bg-[#202c3a]" : "hover:bg-blue-400"
    }`;

  return (
    <div>
      <h1>Profile Account</h1>
      <p>Welcome to your profile page.</p>
    </div>
  );
}
