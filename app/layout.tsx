import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Andrea Cobos - Software Developer Portfolio",
    template: "%s | Andrea Cobos - Software Developer",
  },
  description:
    "Passionate software developer specializing in full-stack web development, mobile apps, and modern technologies. View my projects and get in touch.",
  keywords: ["software developer", "web developer", "full-stack", "React", "Next.js", "Node.js", "portfolio"],
  authors: [{ name: "Andrea Cobos" }],
  creator: "Andrea Cobos",
  publisher: "Andrea Cobos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Andrea Cobos - Software Developer Portfolio",
    description:
      "Passionate software developer specializing in full-stack web development, mobile apps, and modern technologies.",
    siteName: "Andrea Cobos - Software Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrea Cobos - Software Developer Portfolio",
    description:
      "Passionate software developer specializing in full-stack web development, mobile apps, and modern technologies.",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andrea Cobos",
              jobTitle: "Software Developer",
              description:
                "Passionate software developer specializing in full-stack web development, mobile apps, and modern technologies.",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
              knowsAbout: [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Your University",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
