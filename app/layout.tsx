import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "쪼물 아케이드",
  description: "우리가 만드는 세상이 바로 여기에!, 쪼물 아케이드",
  metadataBase: new URL("https://jjomul.io"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jjomul.io",
    siteName: "쪼물 아케이드",
    images: [
      {
        url: "https://jjomul.io/og-image.jpg",
        width: 600,
        height: 314,
        alt: "쪼물 아케이드",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}  antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
