import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sanju-bisone.vercel.app/"; // ⚠️ अपनी असली वेबसाइट का URL यहाँ डालें

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sanju Bisone | Freelance Web Developer in Betul, MP",
    template: `%s | Sanju Bisone`,
  },
  description: "Sanju Bisone is a freelance web developer based in Betul, MP, specializing in modern, responsive website design, smooth animations, and payment integration. Expert in creating high-performance websites tailored for small businesses.",
  keywords: ["freelance web developer", "web developer Betul", "Sanju Bisone", "MERN stack", "Next.js", "React", "portfolio", "website development"],
  authors: [{ name: 'Sanju Bisone', url: siteUrl }],
  creator: 'Sanju Bisone',
  
  openGraph: {
    title: 'Sanju Bisone | Freelance Web Developer',
    description: 'Passionate web developer from Betul, MP, creating exceptional digital experiences.',
    url: siteUrl,
    siteName: 'Sanju Bisone Portfolio',
    images: [
      {
        url: '/sanju.jpg', // `public` फोल्डर में एक 1200x630px की इमेज डालें
        width: 1200,
        height: 630,
        alt: 'Sanju Bisone - Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanju Bisone | Freelance Web Developer',
    description: 'Passionate web developer from Betul, MP, creating exceptional digital experiences.',
    images: ['/sanju.jpg'], // Using the same image as openGraph for consistency
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
