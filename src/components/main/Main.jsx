import React from 'react'
import Hero from '../hero/Hero'
import { PRODUCTS } from '../../static'
import Products from '../products/Products'

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
