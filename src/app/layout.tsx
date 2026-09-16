// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";
import { getCurrentYear } from "@/lib/current-year";
import { Alan_Sans, DM_Mono } from "next/font/google";

const alan_sans = Alan_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = await getCurrentYear();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${alan_sans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <Navbar />
            <div className="w-full sm:px-4">
              <div className="relative mx-auto min-h-screen w-full max-w-6xl border-border pt-24 md:border-x md:border-dashed">
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
