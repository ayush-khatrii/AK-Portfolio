import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";
import { DM_Mono } from "next/font/google";

const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
          <main>
            <Navbar />
            <div className="w-full px-5 pt-24 sm:px-5">
              <div className="mx-auto w-full max-w-5xl">
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
