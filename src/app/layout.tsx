import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Header from "./common-components/Header";
import Footer from "./common-components/Footer";
import LoginAndSignUp from "./common-components/LoginAndSignUp";
const OutfitSans = Outfit({
  variable: "--font-Outfit-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Green Card",
    template: "%s | Green card",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${OutfitSans.variable} antialiased`}>
        <Provider>
          <LoginAndSignUp/>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
