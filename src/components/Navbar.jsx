function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 text-center sm:text-left">
                Advance Plus Electronics & Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}