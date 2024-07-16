import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alitan",
  description: "A discord clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-white dark:bg-[#313338]")}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="alitan-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
