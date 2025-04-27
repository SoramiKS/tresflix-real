'use client';

import { useEffect, useState } from "react"

export default function Profile() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userSession");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
     }, []);

    return(
<div>
      <h2>Ini Profile</h2>
      {user ? (
        <div>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Kamu belum login</p>
      )}
    </div>
    )
}