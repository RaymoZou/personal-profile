import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {

    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-black text-white flex flex-col min-h-screen justify-between">
                <div>{children}</div>
                <Analytics />
            </body>
        </html>
    )
}
