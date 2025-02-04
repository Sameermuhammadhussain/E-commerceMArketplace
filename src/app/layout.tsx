import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
// import Header from "./components/header";
import AdComponent from "./components/adcomponet";
import { CartProvider } from "./context/CartContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Find the best deals on our marketplace!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const discountProduct = {
    name: "Sample Product",
    discount: 20,
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <AdComponent discountProduct={discountProduct} />
        <CartProvider >
          
        {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
