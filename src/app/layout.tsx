import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
const OutfitSans = Outfit({
  variable: "--font-Outfit-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "green cart",
  
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      
      <body className={`${OutfitSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
