"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react"; // Import icon dari lucide-react (icon tambah)

export default function CardMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://10.10.10.134/movies");
        const data = await res.json();
        setMovies(data.data);
      } catch (error) {
        console.error("Gagal fetch movies", error);
      }
    };
    fetchMovies();
  }, []);

  const addToWatchlist = async (movieId: number) => {
    const token = sessionStorage.getItem("user_token"); // ambil token dari session
    if (!token) {
      alert("Kamu belum login!");
      return;
    }
  
    try {
      const res = await fetch("http://10.10.10.134/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // kirim token di header
        },
        body: JSON.stringify({
          movie_id: String(movieId),
        }),
      });
  
      const responseData = await res.json(); // Menyimpan respons dari API
      console.log("API Response:", responseData);
  
      if (!res.ok) {
        throw new Error(responseData.message || "Gagal menambahkan ke watchlist");
      }
  
      alert("Berhasil ditambahkan ke Watchlist!");
    } catch (error) {
      console.error("Error menambahkan ke watchlist:", error);
      alert("Error menambahkan ke Watchlist! Cek konsol untuk detail.");
    }
  };
  

  return (
    <div>
      {movies.map((movie: any) => (
        <div
          key={movie.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={`http://10.10.10.134${movie.poster_url}`}
              width={300}
              height={250}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
              {movie.description}
            </p>
            <div className="flex justify-between">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <button
                onClick={() => addToWatchlist(movie.id)}
                className="p-2 rounded-full hover:bg-blue-500 bg-blue-700 text-white"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
