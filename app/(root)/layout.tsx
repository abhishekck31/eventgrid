import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import * as React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
    </div>
  );
}