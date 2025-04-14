import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/footer";
import { Sora } from "next/font/google";

const sora = Sora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laticínios Matupi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.className}`}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
