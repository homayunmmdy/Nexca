import { ReactQueryProvider } from "@/components";
import { Footer, Header } from "@/components/organisms";
import ThemeProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import PWAInstallButton from "@/components/PWAInstallButton";

const libre_Franklin = Libre_Franklin({ subsets: ["latin"] });

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
          <body className={libre_Franklin.className}>
            <Header />
            <main className="mt-[120px]">{children}</main>
            <PWAInstallButton />
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
