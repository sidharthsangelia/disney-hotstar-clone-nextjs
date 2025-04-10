import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Disney+ Hotstar Clone",
  description:
    "Disney+ Hotstar Clone made with nextjs by Sidharth Sangelia for educational purposes",
    icons: {
      icon: "/favicon.ico", // path relative to /public
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1a1c29]">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>

     
        
        {children}

        </ThemeProvider>
        </body>
    </html>
  );
}
