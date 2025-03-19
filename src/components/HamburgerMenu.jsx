const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 rounded-lg bg-white/20 backdrop-blur-sm shadow-lg hover:bg-white/30 transition-all duration-300"
      >
        {isOpen ? (
          <HiX className="w-6 h-6 text-gray-800" />
        ) : (
          <HiMenu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      <div 
        className={`fixed top-0 right-0 h-screen w-full sm:w-[320px] bg-white/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 text-base sm:text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};