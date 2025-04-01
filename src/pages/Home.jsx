import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [listings, setListings] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch listings from your backend
    const fetchListings = async () => {
      try {
        const response = await axios.get('/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    fetchListings();
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "Thanks for your message! Our team will respond shortly.", sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">Land BNB</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Contact</Link>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">List Your Property</button>
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile menu button */}
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-70"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Luxury shortlet property"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Perfect Shortlet Stay
          </h1>
          <p className="mt-6 text-xl text-indigo-200 max-w-3xl">
            Discover amazing properties for your next vacation or business trip. Comfort, style, and convenience in one place.
          </p>
          <div className="mt-10">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Where are you going?" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Check-in</label>
                  <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Check-out</label>
                  <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex items-end">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 w-full">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={listing.imageUrl || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} 
                alt={listing.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{listing.title}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">${listing.price}/night</span>
                </div>
                <p className="mt-2 text-gray-600">{listing.location}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">{listing.rating || '4.8'}</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-600">{listing.type || 'Entire Apartment'}</span>
                </div>
                <Link to={`/listings/${listing.id}`} className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Chat Button */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Live Chat Modal */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="bg-indigo-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Live Chat Support</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            {chatMessages.length > 0 ? (
              chatMessages.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-100 text-gray-800' : 'bg-gray-100 text-gray-800'}`}>
                    {msg.text}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 mt-20">
                Send us a message and we'll respond shortly.
              </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Land BNB</h3>
              <p className="text-gray-400">Find your perfect shortlet stay with comfort, style, and convenience.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">List Your Property</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Shortlet Street</p>
                <p>Lagos, Nigeria</p>
                <p className="mt-2">Email: info@landbnb.com</p>
                <p>Phone: +234 812 345 6789</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Land BNB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
