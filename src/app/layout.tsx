import "./globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { siteMetadata } from "@/lib/sitemetadata";
import Footer from "@/components/Footer";

// const jetBrains_mono = JetBrains_Mono({
//   subsets: ['latin'],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"

//   ]
// });

// const geist_mono = Geist_Mono({
//   subsets: ['latin'],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
// });


export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <main className="">
            <div className='mb-20  z-[300]'>
              <Navbar />
            </div>
            <div className="max-w-3xl md:mx-auto px-5">
              {children}
              hello ak
              <Footer />
            </div>
          </main>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

