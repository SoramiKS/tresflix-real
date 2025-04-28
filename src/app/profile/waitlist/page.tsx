import WatchlistCard from "@/components/watchlistcard";

// app/profile/waitlist.tsx
export default function WaitlistPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Waitlist</h1>
      <p className="mb-6 text-gray-600 line">
        Berikut adalah daftar film yang terdaftar dalam waitlist. <br/>
        Film yang telah kamu tambahkan ke waitlist akan muncul disini
      </p>

      {/* Section untuk menambahkan kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Kartu pertama */}
        <WatchlistCard />

        {/* Kartu lainnya bisa ditambahkan sesuai kebutuhan */}
      </div>
    </div>
  );
}
