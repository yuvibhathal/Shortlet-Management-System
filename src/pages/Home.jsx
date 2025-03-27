import { FiCalendar, FiTrendingUp, FiShield, FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">LandBNB</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition">Login</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Simplify Your <span className="text-blue-600">Short-Term Rentals</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          The all-in-one platform to manage, optimize, and grow your rental business with ease.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            Get Started <FiArrowRight />
          </button>
          <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-400 transition transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-1 shadow-xl max-w-5xl mx-auto">
          <div className="bg-white rounded-xl h-96 flex items-center justify-center">
            <p className="text-gray-400">Dashboard Preview</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your properties efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <FiCalendar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Booking</h3>
            <p className="text-gray-600 mb-4">
              Automated calendar sync, instant bookings, and smart pricing to maximize your occupancy.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              Learn more <FiArrowRight size={16} />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Insights</h3>
            <p className="text-gray-600 mb-4">
              Real-time analytics and reports to track your revenue, occupancy, and guest satisfaction.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              Learn more <FiArrowRight size={16} />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <FiShield size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Payments</h3>
            <p className="text-gray-600 mb-4">
              PCI-compliant payment processing with automatic payout to your bank account.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              Learn more <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your rental business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of hosts who trust our platform to manage their properties.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LandBNB</h3>
              <p className="text-gray-400">
                The modern platform for short-term rental management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LandBNB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
