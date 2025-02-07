import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caleb Beck Portfolio",
  description: "Professional • Clean • Concise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
