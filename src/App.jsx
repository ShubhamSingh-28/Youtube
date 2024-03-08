import Navbar from "./components/Navbar"
//import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router"
function App() {
 
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default App
