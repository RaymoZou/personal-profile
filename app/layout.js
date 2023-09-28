import Nav from '../components/Nav';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="flex">
          <Nav url="/">Home</Nav>
          <Nav url="/projects">Projects</Nav>
          {/* <Nav url="/blog">Blog</Nav> */}
        </nav>
        {children}
      </body>
    </html>
  )
}