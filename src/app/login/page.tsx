"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (isRegister && password !== confirmPassword) {
      return alert("Password dan konfirmasi tidak sama");
    }

    setLoading(true);
    const url = isRegister ? "api/auth/signup" : "api/auth/signin";

    const payload = isRegister
      ? { email, name, password }
      : { email, password, remember_me: true };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal login/daftar");

      // Setelah berhasil login atau registrasi, simpan session ke localStorage
      sessionStorage.setItem("user_token", data.access_token); // ini tambahan
      if(data.refresh_token) {
        sessionStorage.setItem('refresh_token', data.refresh_token)
      }
      sessionStorage.setItem(
        "userSession",
        JSON.stringify({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          name: isRegister ? name : data.name || email.split("@")[0],
          email,
        })
      );
      
      router.push("/"); // Redirect ke halaman utama
    } catch (err) {
      const error = err as Error;
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2f4156] text-white px-4">
      <h1 className="text-4xl font-serif mb-6">THREEFLIX</h1>

      <div className="w-full h-[600px] bg-[url('/login-bg.svg')] bg-no-repeat bg-contain bg-center flex items-center justify-center m-2">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs text-center text-black transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          {isRegister && (
            <>
              <label className="block text-sm mb-1 text-gray-700">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 p-2 rounded-md bg-[#c8d9e6] text-center transition duration-500 focus:bg-[#b2c3cf]"
              />
            </>
          )}

          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 rounded-md bg-[#c8d9e6] text-center transition duration-500 focus:bg-[#b2c3cf]"
          />

          <label className="block text-sm mb-1 text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 rounded-md bg-[#c8d9e6] text-center transition duration-500 focus:bg-[#b2c3cf]"
          />

          {isRegister && (
            <>
              <label className="block text-sm mb-1 text-gray-700">
                Konfirmasi Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mb-4 p-2 rounded-md bg-[#c8d9e6] text-center transition duration-500 focus:bg-[#b2c3cf]"
              />
            </>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#39687d] hover:bg-[#305666] text-white py-2 rounded-full transition"
          >
            {loading ? "Loading..." : isRegister ? "Daftar" : "Login"}
          </button>

          <p className="mt-2 text-sm text-gray-600">
            {isRegister ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#2b6cb0] hover:underline font-medium"
            >
              {isRegister ? "Login di sini" : "Buat Akun"}
            </button>
          </p>
          <button
            onClick={() => router.back()}
            className="bg-[#39687d] hover:bg-[#305666] text-white px-4 py-2 rounded-full transition mt-5"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
