import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MailPilot AI
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a
            href="#features"
            className="hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition"
          >
            How it Works
          </a>

          <a
            href="#testimonials"
            className="hover:text-blue-600 transition"
          >
            Testimonials
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;