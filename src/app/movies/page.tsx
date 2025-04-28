"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CardMovies from "@/components/moviescard";

export default function Movies() {
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

  return (
    <div className="p-10">
    <div className="grid grid-cols-6 gap-6">
    <CardMovies />
    </div>
    </div>
  );
}
