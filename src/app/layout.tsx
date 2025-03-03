import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/components/nav-bar/NavMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll"; // Import SmoothScroll

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#131313] [&::-webkit-scrollbar]:w-1
    [&::-webkit-scrollbar-track]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:bg-red-500
    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" suppressHydrationWarning>
      <body className="overflow-auto"> {/* Allows scrolling */}
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          <SmoothScroll>{children}</SmoothScroll> {/* Wrap children */}
        </ThemeProvider>
      </body>
    </html>
  );
}


