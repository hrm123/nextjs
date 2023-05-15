import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    document.body.classList.add('bg-hero-zig-zag')
    document.getElementById('__next')?.classList.add('nextElementStyle')
  })
  return <ThemeProvider attribute="class"><Component {...pageProps} /></ThemeProvider>
}
