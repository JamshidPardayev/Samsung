import React from 'react'
import Hero from '../hero/Hero'
import Products from '../products/products'
import { PRODUCTS } from '../../static'

const Main = () => {
  return (
    <div>
      <Hero />
      {PRODUCTS?.map((product) => (
      <Products key={product?.id} {...product}/>
      ))}
    </div>
  )
}

export default Main
