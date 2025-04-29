export default function ContactButton() {
  return (
    <div className="relative inline-block group">
      <button className="relative z-10 bg-black text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
        Contact Me
      </button>
      {/* Add pointer-events-none to prevent the overlay from blocking button clicks */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {/* Top line */}
        <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
          {/* Adjusted classes for animation */}
          <div className="h-full w-full bg-white transform -translate-x-full transition-transform duration-250 ease-linear group-hover:translate-x-0"></div>
        </div>

        {/* Right line */}
        <div className="absolute top-0 right-0 h-full w-0.5 overflow-hidden">
          {/* Adjusted classes for animation with delay */}
          <div className="w-full h-full bg-white transform -translate-y-full transition-transform duration-250 ease-linear delay-250 group-hover:translate-y-0"></div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          {/* Adjusted classes for animation with delay */}
          <div className="h-full w-full bg-white transform translate-x-full transition-transform duration-250 ease-linear delay-500 group-hover:translate-x-0"></div>
        </div>

        {/* Left line */}
        <div className="absolute top-0 left-0 h-full w-0.5 overflow-hidden">
          {/* Adjusted classes for animation with delay */}
          <div className="w-full h-full bg-white transform translate-y-full transition-transform duration-250 ease-linear delay-750 group-hover:translate-y-0"></div>
        </div>
      </div>
    </div>
  );
}
