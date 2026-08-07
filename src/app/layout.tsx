// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const dm_mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${dm_mono.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <Navbar />
            <div className="w-full px-3 sm:px-4">
              <div className="relative mx-auto min-h-screen w-full max-w-6xl border-x border-dashed-2 border-border pt-24">
                {children}
                <Footer />
              </div>
            </div>
          </main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
