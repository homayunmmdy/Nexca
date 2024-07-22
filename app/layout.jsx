import { Inter } from "next/font/google";
import "./globals.css";
import SiteConfig from "@/app/config/site"
import { Footer, Navbar } from "./components/layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: SiteConfig.authors,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={inter.className}>
        <Navbar />
        <h1 className="hidden">{SiteConfig.name}</h1>
        <main className="bg-white">
          {children}
        </main>
      </body>
      <Footer />
    </html>
  );
}