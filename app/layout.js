import { Inter } from 'next/font/google'; // Use a Google Font
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReraDisclaimer from '@/components/ReraDisclaimer';

// Replace Geist with Inter
const geistSans = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Inter({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: "Billionaire Dream Estate – Buy Property Across India | Verified Real Estate Projects & Listings",
  description: "Billionaire Dream Estate is your trusted real estate partner across India, offering verified residential and commercial properties in top cities. Discover luxury apartments, plots, and new project launches from leading developers—all in one place.",
  keywords: "Billionaire Dream Estate, real estate India, property for sale, buy apartment India, flats for sale, residential projects India, real estate platform, plots in India, new project launches, luxury apartments India, property listings, property investment India",
  alternates: {
    canonical: 'https://www.billionairedreamestate.in/',
  },
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
