import React from 'react'
import { useRouter } from 'next/router'
export default function ProductDetails() {
    let {productId} = useRouter().query;
  return (
    <div>ProductDetails {productId}</div>
  )
}
