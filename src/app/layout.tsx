import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/footer";
import { Sora } from "next/font/google";
import ReactQueryProvider from "@/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const sora = Sora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "block",
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
    <html lang="en" className={`${sora.className} scroll-smooth`}>
      <body>
        <ReactQueryProvider>
          <NextTopLoader color="#f30808" />
          <NavBar />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
