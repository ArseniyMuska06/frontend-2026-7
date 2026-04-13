import './App.css'
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import AdminInventory from './pages/AdminInventory'
import AdminInventoryCreate from './pages/AdminInventoryCreate'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path="/admin" element={<AdminInventory />} />
        <Route path="/admin/create" element={<AdminInventoryCreate />} />
      </Routes>
    </>
  )
}

export default App