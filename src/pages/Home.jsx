const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Our Land-BNB
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Effortlessly manage your short-term rentals with our intuitive platform.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Easy Booking</h3>
            <p className="text-gray-600">
              Manage bookings seamlessly with our user-friendly interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-Time Analytics</h3>
            <p className="text-gray-600">
              Track your property performance with real-time data and insights.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure Payments</h3>
            <p className="text-gray-600">
              Enjoy secure and hassle-free payment processing.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 Shortlet Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
