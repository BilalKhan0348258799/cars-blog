// src/app/layout.tsx
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Car Blog',
  description: 'A blog about cars',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Shared header */}
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Shared footer */}
      </body>
    </html>
  );
}



