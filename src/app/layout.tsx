import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Amritesh Gautam",
  description: "Building real-time apps, AI workflows, and full-stack systems with thoughtful engineering, clean interfaces, and attention to detail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${saira.variable} antialiased`}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#111",
              color: "#a8a29e",
              border: "1px solid #333",
              fontSize: "13px",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
