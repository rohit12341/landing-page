import Header from '../../components/Header'
import './globals.css'
import { Karla } from 'next/font/google'

const inter = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
