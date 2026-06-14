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
          <main className="">
            <div className="mb-20  z-[300]">
              <Navbar />
            </div>
            <div className="max-w-3xl md:mx-auto px-5">
              {children}
              <Footer />
            </div>
          </main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
