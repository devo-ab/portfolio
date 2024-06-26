import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio || Avijit Biswas",
  description: "Portfolio of Avijit Biswas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
