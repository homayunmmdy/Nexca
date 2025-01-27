import { Footer, Header, ReactQueryProvider } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <html lang="en" data-theme="light">
          <body className={inter.className}>
            <Header />
            <main className="mt-[120px]">{children}</main>
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
