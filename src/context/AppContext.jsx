import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookingsData } from "../assets/assets";
import { apartmentsData } from "../assets/assets";



export const AppContext = createContext()



export const AppContextProvider =(props) =>{

    
 /////////////////////////////Bookings\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //bookings
    const [allBookings, setAllBookings] = useState([])
        //bookings
    const [allApartments, setAllApartments] = useState([])

    const navigate= useNavigate()

        //fetch allbookings
        const fetchAllBookings =()=>{
            setAllBookings(bookingsData)
        }

        const fetchAllApartments =()=>{
            setAllApartments(apartmentsData)
        }

        useEffect(()=>{
            fetchAllBookings()
            fetchAllApartments()
        },[])

const value = {
    navigate,
    allBookings, 
    allApartments,
}



return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
}