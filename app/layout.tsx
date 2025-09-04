import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/context/auth";

export const metadata: Metadata = {
  title: "AuthAPI - Ready-to-Use Authentication API",
  description:
    "Integrate complete authentication into your frontend with our ready-to-use API - no backend development needed",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}
          <Toaster />

          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
