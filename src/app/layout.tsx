// app/layout.tsx
import './globals.css'; // kalau kamu punya CSS global
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'TresFlix',
  description: 'Deskripsi Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
