import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Cart from './components/Container/CartContainer.jsx'
import Shop from './components/ShoppingCart/AddCart.jsx'
import App from './App.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/shop",
        element:<Shop />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
