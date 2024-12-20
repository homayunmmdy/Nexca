import { Footer, Header, ReactQueryProvider } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en" data-theme="light">
        <body className={inter.className}>
          <Header />
          <main className="mt-[120px]">{children}</main>
          <Footer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
