function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            MailPilot AI
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Features</a>
          <a href="#">How it Works</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;