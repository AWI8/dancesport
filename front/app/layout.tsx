import Footer from '../components/footer';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head />
      <body>
        <main className='h-screen'>
          {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
