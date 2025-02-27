import { Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import Dashboard from './pages/admin/Dashboard';
import ViewBookings from "./pages/admin/ViewBookings";
import AddBooking from "./pages/admin/AddBooking";
import ViewGuest from "./pages/admin/ViewGuest";
import Unauthorized from "./components/auth/Unauthorized";
import Admin from './pages/admin/Admin';
import Navbar from './components/admin/Navbar';



function App() {
  

  return (
    
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
     <Routes>
     <Route path='/' element={ <Home />} />

     <Route path='/admin' element={ <Admin /> }>
            <Route index element={<Dashboard />} />
            <Route path='view-bookings' element={ <ViewBookings/>}/>
            <Route path='add-booking' element={ <AddBooking/>}/>
            <Route path='view-guests' element={ <ViewGuest/>}/>
      </Route>

      <Route path='/unauthorized' element={<Unauthorized/>} />
     </Routes>
    </div>

  )
}

export default App
