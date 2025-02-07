export default function CalebWD() {
  return (
    <div className="fixed inset-0 bg-[#030303] overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/bgbreaker.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Main container - 60% width */}
      <div className="relative z-10 w-[60%] h-full mx-auto">
        {/* Directory navigation */}
        <nav className="flex items-center gap-2 mt-[5vh]">
          <a href="/CalebWD" className="h-[38px] w-[38px] bg-[#11101b] border-[4px] border-[#1a182d] rounded-xl flex items-center justify-center">
            <img
              src="/images/house.png"
              alt="Home"
              className="w-5 h-5 invert"
            />
          </a>
          <div className="h-[38px] flex items-center gap-2 bg-[#11101b] border-[4px] border-[#1a182d] rounded-xl px-3">
            <a href="/CalebWD" className="text-gray-500 hover:text-gray-300 transition-colors font-['Courier_New'] text-sm">
              CalebWD
            </a>
          </div>
        </nav>

        {/* Inner container - 5% smaller */}
        <div className="w-[95%] h-full mx-auto">
          <div className="pt-[5vh]">
            <h1 className="text-[#4cb1ff] text-6xl font-bold drop-shadow-[0_0_10px_rgba(76,177,255,0.3)] font-['Microsoft_Sans_Serif']">
              Caleb Beck
            </h1>
            <p className="text-white/50 mt-2 font-['Microsoft_Sans_Serif'] flex items-center gap-2">
              <span className="text-xl">Professional</span>
              <span className="text-sm">•</span>
              <span className="text-xl">Clean</span>
              <span className="text-sm">•</span>
              <span className="text-xl">Concise</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}