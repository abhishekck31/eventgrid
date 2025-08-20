import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { clerkMiddleware } from '@clerk/nextjs/server';
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable:'--font-poppins',
})

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platfrom for event management.",
  icons:{
    icon:'app/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
