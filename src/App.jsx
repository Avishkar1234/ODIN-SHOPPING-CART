import { Outlet } from "react-router"
import NavBar from "./components/Navigation/NavBar"
import "./index.css"
import { useState } from "react"

function App() {
  const [cart, setCart] = useState({})

  function addToCart(product) {
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }))
  }

  function removeFromCart(productId) {
    setCart(prev => {
      const updated = {...prev};
      
      if (updated[productId] > 1) {
        updated[productId] -= 1;
      } else {
        delete updated[productId];
      }
      
      return updated;
    })
  }

  return (
    <>
      <NavBar />
      <main>
        <Outlet context={{ cart, addToCart, removeFromCart }} />
      </main>
    </>
  );
}

export default App