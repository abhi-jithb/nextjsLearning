import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <h1>hai</h1>
    {/* instead of <a> -> Link component => () {it is the optimal way as it don't redownload resources once again!!!} */}
    <Link href="/users">USERS</Link>
   </main>
  )
}
