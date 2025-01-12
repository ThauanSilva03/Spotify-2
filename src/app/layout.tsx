import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify 2",
  description: "Spotify, só que melhor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
