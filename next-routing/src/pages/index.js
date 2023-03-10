import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Test App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/"><h2>Home Page</h2></Link>
        <Link href="/blog"><h3>Blog page</h3></Link>
        <Link href="/product"><h3>Product page</h3></Link>
      </div>
    </>
  )
}
