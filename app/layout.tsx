import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helm — Mission Control for Offshore Wind O&M",
  description:
    "Agentic AI that runs your daily planning and mobilisation loop. One system. One plan. Every morning.",
  openGraph: {
    title: "Helm — Mission Control for Offshore Wind O&M",
    description:
      "Agentic AI that runs your daily planning and mobilisation loop. One system. One plan. Every morning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
