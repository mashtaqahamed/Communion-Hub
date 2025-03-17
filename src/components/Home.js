import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Connecting People Across Faiths & Interests
        </motion.h1>
        <p>Join our community and explore meaningful events.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/events")}
        >
          Explore Events
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Home;
