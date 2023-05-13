import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    document.body.classList.add('bg-hero-zig-zag')
    document.getElementById('__next')?.classList.add('nextElementStyle')
  })
  return <Component {...pageProps} />
}
