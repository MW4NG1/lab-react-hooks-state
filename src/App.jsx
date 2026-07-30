import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  // State used to check whether the dark mode is activated
  const [darkMode, setDarkMode]= useState(false)
  // Function that will switch dark mode on and off
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  // Adds a selected product in the cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  // TODO: Implement state for cart management
  // State used for storing items added in the cart
  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering
  // State used to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
      value={selectedCategory}
      onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList
      selectedCategory={selectedCategory}
      addToCart={addToCart} 
      />

      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
