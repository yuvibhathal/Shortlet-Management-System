import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditBookingModal from "./EditBookingModal";




const ViewGuestComp = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  
  const apiUrl = "http://localhost:5000/api/v1/bookings/get-bookings"; // Direct API URL
useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiUrl);
      setBookings(res.data);
    } catch (err) {
      toast.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking); // Open modal
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const handleSaveChanges = async (id, updatedData) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/v1/bookings/bookings/${id}`, updatedData);
      toast.success("Booking updated successfully");
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? res.data.booking : b))
      );
      handleCloseModal();
    } catch (err) {
      toast.error("Failed to update booking");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/v1/bookings/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
      toast.success("Booking deleted");
    } catch (err) {
      toast.error("Failed to delete");
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        View Guests
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
    <th className="border p-2">Phone Number</th>
  </tr>
</thead>
<tbody>
  {bookings.map((booking) => (
    <tr key={booking._id} className="text-center">
      <td className="border p-2">{booking.guestName}</td>
      <td className="border p-2">{booking.email}</td>
      <td className="border p-2">{booking.phone}</td>
      
    </tr>
  ))}
</tbody>
        </table>
      )}
    </div>
  );
};

export default ViewGuestComp;