// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";
import { getCurrentYear } from "@/lib/current-year";
import localFont from "next/font/local";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist-sans", display: "swap" });
const mono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", display: "swap" });

export const metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = await getCurrentYear();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geist.variable} ${mono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <Navbar />
            <div className="w-full">
              <div className="site-content relative mx-auto min-h-screen w-full max-w-6xl pt-20 has-[.portfolio-hero]:pt-0">
                {children}
                <Footer currentYear={currentYear} />
              </div>
            </div>
          </main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
