import './App.css'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'
// import Home from'./pages/Home/Home'
// import Search from './pages/Search/Search'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet/> 
    </div>
  )
}

export default App
