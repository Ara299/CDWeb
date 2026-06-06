import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import Login from "./Login";
import Register from "./Register";
import SendEmail from "./SendEmail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center"  style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5560203/pexels-photo-5560203.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
      <div
        className="
          max-w-md
          w-full
          p-8
          rounded-xl
          bg-black/30 backdrop-blur-lg
          backdrop-blur-md
          border border-white/20
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            // key={isVerificationSent ? "verification" : authState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sendEmail" element={<SendEmail />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;