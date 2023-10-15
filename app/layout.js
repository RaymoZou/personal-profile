import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen justify-between">
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}