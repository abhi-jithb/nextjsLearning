import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/app/components/ProductCard'

export default function Home() {
  return (
   <main>
    <h1>hai</h1>
    {/* instead of <a> -> Link component => () {it is the optimal way as it don't redownload resources once again!!! = called as client-side navigation } */}
    <Link href="/users">USERS</Link>
    <ProductCard/>
   </main>
)
}