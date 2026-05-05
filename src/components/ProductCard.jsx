import React from 'react'
import styles from '../styles/ProductCard.module.css'

// onAddToCart comes from App via ProductList
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* passes the whole product object up so App can add it to cart state */}
      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard