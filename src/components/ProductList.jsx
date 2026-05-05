import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk',  price: '$2.50', category: 'Dairy',  inStock: false },
]

// selectedCategory and onAddToCart both come down from App
const ProductList = ({ selectedCategory, onAddToCart }) => {
  // show everything if 'All' is selected, otherwise filter by category
  const visible = selectedCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>
      {visible.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList