"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const checkSession = () => {
      const session = localStorage.getItem("userSession");
      if (session) {
        try {
          const user = JSON.parse(session);
          setIsLoggedIn(true);
          setUserName(user.name || "User");
        } catch {
          setIsLoggedIn(false);
          setUserName("");
        }
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    };

    // Check session initially
    checkSession();

    // Monitor changes in localStorage (for session updates)
    window.addEventListener("storage", checkSession);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("storage", checkSession);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    setIsLoggedIn(false);
    setUserName("");
    setMenuOpen(false);
  };

  if (pathname === "/login") return null;

  return (
    <nav className="bg-[#2f4156] shadow-md py-4 px-8 text-white relative z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <p>TRESFLIX</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 items-center">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/movies" className="hover:text-blue-400">
            Movies
          </Link>
          {isLoggedIn && (
            <Link href="/profile" className="hover:text-blue-400">
              Profile
            </Link>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-blue-400 whitespace-nowrap"
            >
              Log out
            </button>
          ) : (
            <Link href="/login" className="hover:text-blue-400">
              Login
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-4 mt-2 w-48 bg-[#1f2a36] rounded-xl shadow-lg py-4 px-6 flex flex-col space-y-3 z-50">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/movies" className="hover:text-blue-400">
            Movies
          </Link>
          {isLoggedIn && (
            <span className="text-gray-300 font-medium">{userName}</span>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-left hover:text-blue-400"
            >
              Log out
            </button>
          ) : (
            <Link href="/login" className="hover:text-blue-400">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
