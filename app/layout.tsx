import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

import NextAuthSessionProvider from './providers/SessionProvider'
import { Toaster } from '@/components/ui/toaster'
import { Provider } from 'react-redux';
import store from '@/components/utils/redux/store'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Map LogiX',
    description: 'A Growing Community For Logistics',
};


const  RootLayout = (props: {
  children: React.ReactNode
  nav: React.ReactNode
}) => {
  return (
    <html lang="en">
      <meta property="og:image" content="https://myurl.com/ogImage.png" />
      <body className={inter.className}>
      <NextAuthSessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

        {props.nav}
        {props.children}
        <Toaster />
  
             </ThemeProvider>
      </NextAuthSessionProvider>
      </body>

    </html>
  )
}
export default RootLayout;
