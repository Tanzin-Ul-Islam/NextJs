import React from 'react'
import { useRouter } from 'next/router'
export default function ProductDetails() {
  let { productId } = useRouter().query;
  let router = useRouter();
  return (
    <>
      <div>ProductDetails {productId}</div>
      <p onClick={() => { router.push('/product') }} style={{'cursor':'pointer'}}>Go back</p>
    </>
  )
}
