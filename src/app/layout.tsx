"use client";

import { useEffect, useState } from "react";
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
      className="bg-[#131313] [&::-webkit-scrollbar]:w-1
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:bg-red-500
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      suppressHydrationWarning
    >
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
