// app/layout.tsx
import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Questrial, Space_Grotesk } from 'next/font/google'

const questrial = Questrial({ subsets: ['latin'], weight: '400' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'My App',
  description: 'Whatever',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` bg-black ${questrial.className} ${spaceGrotesk.className}`}>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
