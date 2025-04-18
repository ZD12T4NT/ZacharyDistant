"use client";

import { useEffect, useState } from "react";
import Head from "next/head"; // Import Head from next/head
import "./globals.css";
import NavMenu from "@/components/nav-bar/NavMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
      <html
        lang="en"
        className="bg-[#131313]"
        suppressHydrationWarning
      >

      <head>
        {/* Add your font link here */}

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Questrial&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>

      </head>
      <body className="overflow-auto"> {/* Allows scrolling */}
        {!isMobile && <CustomCursor />} {/* Only show on non-mobile devices */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
