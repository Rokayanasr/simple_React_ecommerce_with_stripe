import './App.css'
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
// import CheckoutSuccess from './components/CheckoutSuccess'
// import Cart from './components/Cart'
import Meals from './components/Meals'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Checking from './components/Checking'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Meals />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Navbar />} />
          <Route path='/checkout-success' element={<Checking/>} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/not-found' element={<Notfound />} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
