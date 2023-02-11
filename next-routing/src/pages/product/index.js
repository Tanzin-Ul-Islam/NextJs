import Link from "next/link"
export default function Product() {
  const prodId = 100
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/product/1"><h1>Product 1</h1></Link>
      <Link href={'/product/'+prodId} replace><h1>Product 100</h1></Link>
    </div>
  )
}
