import SiteConfig from "@/app/config/site";
import { Inter } from "next/font/google";
import { Dependencies, Footer, Navbar, Provider } from "./components/general";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: SiteConfig.authors,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
  alternates: {
    canonical: SiteConfig.siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Provider />
      <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
        <body className={inter.className}>
          <Navbar />
          <h1 className="hidden">{SiteConfig.name}</h1>
          <main className="bg-white">
            {children}
          </main>
          <Footer />
        </body>
        <Dependencies />
      </html>
    </>
  );
}