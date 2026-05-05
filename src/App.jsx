import { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

function App() {
  const [darkMode, setDarkMode]         = useState(false)
  const [cart, setCart]                 = useState([])
  const [selectedCategory, setCategory] = useState('All')

  // don't add duplicates
  const handleAddToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart(prev => [...prev, product])
    }
  }

  return (
    <div style={{ background: darkMode ? '#1a1a1a' : '#fff', color: darkMode ? '#f0f0f0' : '#111', minHeight: '100vh', padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>🛒 Grocery App</h1>

      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(prev => !prev)} />

      {/* category filter dropdown */}
      <div style={{ margin: '16px 0' }}>
        <label htmlFor="cat-filter">Category: </label>
        <select
          id="cat-filter"
          value={selectedCategory}
          onChange={e => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Fruits</option>
          <option>Dairy</option>
        </select>
      </div>

      <ProductList selectedCategory={selectedCategory} onAddToCart={handleAddToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App