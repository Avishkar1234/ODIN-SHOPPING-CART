import { Outlet } from "react-router"
import NavBar from "./components/Navigation/NavBar"
import "./index.css"

function App() {

  return(
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
