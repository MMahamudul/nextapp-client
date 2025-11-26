// src/app/layout.js
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Course Camp",
  description: "Course selling app with auth and protected pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
     <Providers>
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />  
  </div>
</Providers>
      </body>
    </html>
  );
}



