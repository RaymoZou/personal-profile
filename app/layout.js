import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen justify-between">
        <div>{children}</div>
      </body>
    </html>
  )
}
