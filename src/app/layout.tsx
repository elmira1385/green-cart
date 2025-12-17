import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
const OutfitSans = Outfit({
  variable: "--font-Outfit-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default:"Green card",
    template: '%s | Green card',
  }
  
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      
      <body className={`${OutfitSans.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
