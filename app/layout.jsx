import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} `,
  description: SiteConfig.description,
};



export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={inter.className}>
        <h1 className="hidden">SiteConfig.name</h1>
        {children}
      </body>
    </html>
  );
}
