import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hive Salon | Premium Hair Care & Styling",
  description: "Experience luxury hair care at The Hive Salon. Award-winning stylists, premium services, and stunning transformations. Book your appointment today.",
  keywords: "hair salon, luxury salon, hair styling, hair coloring, haircuts, bridal hair, hair treatments",
  openGraph: {
    title: "The Hive Salon | Premium Hair Care & Styling",
    description: "Experience luxury hair care at The Hive Salon. Award-winning stylists, premium services, and stunning transformations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
