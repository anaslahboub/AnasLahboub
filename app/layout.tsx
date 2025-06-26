import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anas Lahboub',
  description: 'Created with Anas Lahboub',
  generator: '',
  icons: {
    icon: './logo.png', // Chemin vers votre fichier logo (dans le dossier public)
    shortcut: './logo.png',
    apple: './logo.png', 
  },
  openGraph: {
    images: '/logo.png', // Logo pour les partages sur les réseaux sociaux
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon pour les navigateurs modernes */}
        <link rel="icon" href="./logo.png" type="image/png" sizes="any" />
        
        {/* Favicon pour Internet Explorer */}
        <link rel="shortcut icon" href="./logo.png" />
        
        {/* Apple Touch Icon (pour iOS) */}
        <link rel="apple-touch-icon" href="./logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}