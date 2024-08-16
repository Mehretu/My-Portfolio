import type { Metadata } from "next";
import { Roboto, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/Providers";

const roboto = Roboto({ weight: ['400', '900'], subsets: ['cyrillic'] });
const plus = Plus_Jakarta_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plus.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
