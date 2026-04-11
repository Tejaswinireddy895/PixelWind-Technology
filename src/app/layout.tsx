import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelwind Technologies | IT Training & Career Development",
  description: "ISO 9001:2015 certified IT training, corporate skill development, staffing and technology services in Andhra Pradesh.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
