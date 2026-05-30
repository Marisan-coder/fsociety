import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F SOCIETY | Plateforme Mode & Luxe",
  description: "Connect. Create. Elevate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}