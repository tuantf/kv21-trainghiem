import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trải nghiệm PCCC",
  description: "Trải nghiệm PCCC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
