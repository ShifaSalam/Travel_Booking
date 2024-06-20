
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Routes,Route } from 'react-router-dom'

import Footer from './Components/Footer'
import Home from './Pages/Home'
import Tours from './Pages/Tours'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AdminPanel from './Pages/AdminPanel'
import AdminLogin from './Pages/AdminLogin'
import TourDetails from './Pages/TourDetails'
import BookingDetails from './Pages/BookingDetails'
import Thankyou from './Pages/Thankyou'
import Gallery from './Pages/Gallery'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/admindash' element={<AdminPanel/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path='/tourdet/:tid' element={<TourDetails/>}/>
      <Route path='/bookingdet/:tid' element={<BookingDetails/>}/>
      <Route path='/gal' element={<Gallery/>}/>
      <Route path='/thank' element={<Thankyou/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
