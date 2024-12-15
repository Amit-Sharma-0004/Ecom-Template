import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomeLayout from "@/layouts/HomeLayout.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      Ye home page hain
    </main>
  );
}

Home.Layout = HomeLayout;