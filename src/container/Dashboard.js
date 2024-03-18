import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductList} from '../data/ProductList'

export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {ProductList.map((product) => <ProductCard{...product}/>)}
    </div>
  )
}

