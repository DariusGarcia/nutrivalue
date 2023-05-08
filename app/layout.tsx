import Navbar from '@/components/navbar/'
import '../styles/globals.css'
import Footer from '@/components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar /> {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'NutriValue',
  description: 'Welcome to NutriValue',
}
