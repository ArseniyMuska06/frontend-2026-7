import './App.css'
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import AdminInventory from './pages/AdminInventory'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path="/admin" element={<AdminInventory />} />
      </Routes>
    </>
  )
}

export default App