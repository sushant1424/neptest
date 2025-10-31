import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { ClientRoot } from "@/components/client-root";

const displaySerif = Cinzel({ weight: ["400","700"], subsets: ["latin"], variable: "--font-display" });
const bodySans = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Antique Nepal",
  description: "Handcrafted Hemp Bags Woven with Himalayan Heritage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${displaySerif.variable} ${bodySans.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <ClientRoot>
            {children}
          </ClientRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
