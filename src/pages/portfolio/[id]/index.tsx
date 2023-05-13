import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function PortfolioPage() {
  const router = useRouter();
  return (
    <div>{`Particular ${router.query.id} portfolio  Page`}</div>
  )
}
