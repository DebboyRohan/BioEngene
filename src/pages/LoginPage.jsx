import { motion } from "framer-motion";
import { biotechdept } from "../assets/asset.js";
function LoginPage() {
  return (
    <div>
      <section
        className="relative bg-cover bg-fixed  h-screen bg-center"
        style={{
          backgroundImage: `url(${biotechdept})`,
          backdropFilter: "blur(15px)",
        }}
      >
        <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 animate-gradient blur-3xl opacity-20"></div>

          {/* Floating Light Effect */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] blur-[10s0px] rounded-full"></div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg p-8 rounded-xl backdrop-blur-xl mx-4"
          >
            {/* Title with Animated Slide */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-white text-center mb-6"
            >
              Welcome
            </motion.h2>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-full bg-white/10 placeholder-white/60 text-black focus:ring-2 focus:ring-blue-400 transition outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-full bg-white/10 placeholder-white/60 text-black focus:ring-2 focus:ring-purple-400 transition outline-none"
              />

              {/* Animated Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white bg-cyan-700 rounded-full shadow-md hover:opacity-90 transition"
              >
                Sign In
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
