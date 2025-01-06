

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import PageNotFound from './pages/PageNotFound'
import Footer from './componnets/Footer'


function App() {
 

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id/view' element={<View/>}/>    {/* here it is dynamic link(:/) . that is this link is changes */}
        <Route path='/*' element={<PageNotFound/>}/>    {/*mukalil kodthath allathe enth vannaalum ee page work aavum */}
      </Routes>

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
