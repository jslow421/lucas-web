export default function ContactButton() {
  return (
    <div className="relative inline-block group">
      <button className="relative z-10 bg-black text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
        Contact Me
      </button>
      {/* Overlay container for the animated border */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {/* Top line - Use named animation */}
        <div
          className="absolute top-0 left-0 w-full h-0.5 bg-white
                     animate-marquee-top" // Changed
        ></div>

        {/* Right line - Use named animation */}
        <div
          className="absolute top-0 right-0 w-0.5 h-full bg-white
                     animate-marquee-right" // Changed
        ></div>

        {/* Bottom line - Use named animation */}
        <div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-white
                     animate-marquee-bottom" // Changed
        ></div>

        {/* Left line - Use named animation */}
        <div
          className="absolute bottom-0 left-0 w-0.5 h-full bg-white
                     animate-marquee-left" // Changed
        ></div>
      </div>
    </div>
  );
}
