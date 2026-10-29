import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PressFeedback from "@/components/PressFeedback";
import SiteBackground from "@/components/SiteBackground";
import { siteMetadata } from "@/lib/sitemetadata";
import { getCurrentYear } from "@/lib/current-year";

const alan = localFont({
  src: "./fonts/AlanSans-Variable.ttf",
  weight: "300 900",
  display: "swap",
  variable: "--font-alan-sans",
});

export const metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentYear = await getCurrentYear();
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${alan.variable} relative isolate flex min-h-svh flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll />
          <PressFeedback />
          {/* <SiteBackground /> */}
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main
            id="main-content"
            tabIndex={-1}
            className="site-container site-content relative flex-1 pt-24"
          >
            {children}
          </main>
          <div className="site-container mt-auto">
            <Footer currentYear={currentYear} />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
