import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Image from "next/image";
// Import the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application
export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Jupiter bot",
=======
  title: "Jupiter  bot",
>>>>>>> d8b1b847106f80af433e34e561c8047cfa021b80
  description: "Jupiter bot your next bot",
};

// Define the root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
