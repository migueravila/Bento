import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Start',
  description: 'Minimalist start page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0f14] text-white antialiased">{children}</body>
    </html>
  )
}
