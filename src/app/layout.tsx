// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";
import { Poppins, JetBrains_Mono, DM_Mono } from "next/font/google";
const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
// const geist_mono = Geist_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm_mono.className} `}>
        <ThemeProvider attribute="class" defaultTheme="dark">
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
