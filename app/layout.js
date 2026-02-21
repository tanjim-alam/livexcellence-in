import { Inter } from 'next/font/google'; // Use a Google Font
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReraDisclaimer from '@/components/ReraDisclaimer';

// Replace Geist with Inter
const geistSans = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Inter({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: "Livexcellance – Buy Property Across India | Verified Real Estate Projects & Listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <ReraDisclaimer />
        <Footer />
      </body>
    </html>
  );
}
