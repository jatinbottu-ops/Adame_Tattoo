import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Adame Tattooz · Black & Grey Realism · Atlanta, GA",
  description:
    "Professional black and grey realism tattoos by Jacob Adame (@adame_tattooz) in Atlanta, GA. Specializing in high-contrast shading, custom sleeves, portraits, religious imagery, and timeless realism.",
  keywords: "Jacob Adame tattoo, black grey realism tattoo Atlanta, custom tattoo artist Atlanta, sleeve tattoo Atlanta, portrait tattoo Atlanta, religious tattoo Atlanta, adame tattooz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
