// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";
import { getCurrentYear } from "@/lib/current-year";
import { Alan_Sans } from "next/font/google";
const alan = Alan_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-alan-sans" });

export const metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = await getCurrentYear();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${alan.variable} ${alan.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <Navbar />
            <div className="w-full">
              <div className="site-content relative mx-auto min-h-screen w-full max-w-3xl border-x border-border/50 pt-24 has-[.portfolio-hero]:pt-0">
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
