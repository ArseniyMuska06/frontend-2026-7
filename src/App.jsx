import './App.css'
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import AdminInventory from './pages/AdminInventory'
import AdminInventoryCreate from './pages/AdminInventoryCreate'
import AdminInventoryDetails from './pages/AdminInventoryDetails'
import AdminInventoryEdit from './pages/AdminInventoryEdit'
import FavouritesGallery from './pages/Favorites'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path="/admin" element={<AdminInventory />} />
        <Route path="/admin/create" element={<AdminInventoryCreate />} />
        <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
        <Route path="/admin/inventory/:id" element={<AdminInventoryDetails />} />
        <Route path='/favorites' element={<FavouritesGallery />} />
      </Routes>
    </>
  )
}

export default App