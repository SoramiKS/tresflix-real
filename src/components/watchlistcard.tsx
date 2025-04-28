"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WatchlistCard() {
  const [watchlist, setWatchlist] = useState<any[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const token = sessionStorage.getItem("user_token"); // Ambil token dari sessionStorage
      if (!token) {
        alert("Kamu belum login!");
        return;
      }

      try {
        const res = await fetch("http://10.10.10.134/watchlist", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Kirim token untuk autentikasi
          },
        });

        if (!res.ok) {
          throw new Error("Gagal mengambil watchlist");
        }

        const data = await res.json();
        setWatchlist(data.data); // Simpan data watchlist ke state
      } catch (error) {
        console.error("Error fetching watchlist", error);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div>
      {watchlist.map((item: any) => (
        <div
          key={item.id}
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4"
        >
          <Image
            src={`http://10.10.10.134${item.movie.poster_url}`} // Gunakan URL poster dari item
            alt={item.movie.title}
            width={400}
            height={300}
            className="rounded-xl"
          />
          <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">{item.movie.title}</div>
            <p className="text-gray-700 text-base">
              {item.movie.description}
            </p>
          </div>
          <div className="px-2 pt-4 pb-2 flex gap-2">
            <button className="bg-[#1f2937] hover:bg-[#111827] text-white font-semibold py-2 px-4 rounded-xl text-sm">
              View Details
            </button>
            <button className="border border-gray-400 hover:border-gray-600 text-gray-700 hover:text-black font-semibold py-2 px-4 rounded-xl text-sm">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
