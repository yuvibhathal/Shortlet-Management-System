import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [message, setMessage] = useState("Welcome to Shortlet Management!");

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-lg bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-4">{message}</h1>
        <p className="text-lg mb-6">
          Manage your short-term rentals effortlessly. Explore our seamless features.
        </p>
        <Button 
          onClick={() => setMessage("Let's Get Started! 🚀")}
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition"
        >
          Explore Now
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
