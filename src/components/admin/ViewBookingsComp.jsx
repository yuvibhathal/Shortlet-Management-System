import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";


const ViewBookingsComp = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const apiUrl = "http://localhost:5000/api/v1/bookings/get-bookings"; // Direct API URL

  // Fetch all bookings
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setBookings(response.data); // Ensure response.data contains bookings
        console.log(response.data); // Log bookings
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); // Runs only once on mount

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        View Bookings
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
  <tr className="bg-gray-200">
    <th className="border p-2">Guest Name</th>
    <th className="border p-2">Email</th>
    <th className="border p-2">Phone</th>
    <th className="border p-2">Room Number</th>
    <th className="border p-2">Check-in</th>
    <th className="border p-2">Check-out</th>
    <th className="border p-2">Actions</th>
  </tr>
</thead>
<tbody>
  {bookings.map((booking) => (
    <tr key={booking._id} className="text-center">
      <td className="border p-2">{booking.guestName}</td>
      <td className="border p-2">{booking.email}</td>
      <td className="border p-2">{booking.phone}</td>
      <td className="border p-2">{booking.roomNumber}</td>
      <td className="border p-2">{new Date(booking.checkInDate).toLocaleDateString()}</td>
      <td className="border p-2">{new Date(booking.checkOutDate).toLocaleDateString()}</td>
      <td className="border p-2 flex justify-center space-x-4">
        {/* Edit Icon */}
        <button
          onClick={() => handleEdit(booking)}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaEdit size={18} />
        </button>

        {/* Delete Icon */}
        <button
          onClick={() => handleDelete(booking._id)}
          className="text-red-600 hover:text-red-800"
        >
          <FaTrash size={18} />
        </button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBookingsComp;