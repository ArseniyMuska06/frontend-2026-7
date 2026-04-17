import './App.css'
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import AdminInventory from './pages/AdminInventory'
import AdminInventoryCreate from './pages/AdminInventoryCreate'
import AdminInventoryDetails from './pages/AdminInventoryDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path="/admin" element={<AdminInventory />} />
        <Route path="/admin/create" element={<AdminInventoryCreate />} />
        <Route path="admin/inventory/:id" element={<AdminInventoryDetails />} />
      </Routes>
    </>
  )
}

export default App