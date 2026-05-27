import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neurovenus.com"),
  title: "Neurovenus | Remote Cognitive & Sleep Research Platform",
  description:
    "Neurovenus is a remote cognitive and sleep research platform for structured protocols, online assessments, participant workflows, and analysis-ready exports.",

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Neurovenus | Remote Cognitive & Sleep Research Platform",

    description:
      "Run structured cognitive and sleep studies remotely with protocol workflows, participant management, institutional workspaces, and analysis-ready exports.",

    url: "https://neurovenus.com",

    siteName: "Neurovenus",

    images: [
      {
        url: "/neurovenus-og-image-.png",
        width: 1200,
        height: 630,
        alt: "Neurovenus research platform",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Neurovenus | Remote Cognitive & Sleep Research Platform",

    description:
      "Remote cognitive and sleep research infrastructure for academic labs, institutions, and clinical research teams.",

    images: ["/neurovenus-og-image.png"],
  },
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