import './globals.css'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

export const metadata = {
  title: 'Vacation Easy',
  description: 'Book easy and have an unending love',
  icons: {
    icon: "/favicon.svg", 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
