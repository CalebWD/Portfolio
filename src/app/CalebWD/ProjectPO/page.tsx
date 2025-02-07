'use client';
import { useState } from 'react';
import Image from 'next/image';

const TERMINAL_MESSAGES = [
  "I enjoy full stack development and long coding sessions ripping my hair out.",
  "Working on this gave me brain damage-amage-amage",
  "Code never lies, my comments do, don't trust them...",
  "404: The webpage you are looking for is not found, please try again later.",
  "Hey guys look, I'm a div block. Isn't that so cool!",
  "My code works! I have no idea why, but it works!",
  "Debugging is just me getting angry with me for being me.",
];

const TECHNOLOGIES = [
  {
    name: 'TypeScript',
    icon: '/tech/typescript.svg',
    url: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Next.js',
    icon: '/tech/next.svg',
    url: 'https://nextjs.org/'
  },
  {
    name: 'Tailwind CSS',
    icon: '/tech/tailwind.svg',
    url: 'https://tailwindcss.com/'
  }
];

export default function ProjectPO() {
  const [currentMessage, setCurrentMessage] = useState(TERMINAL_MESSAGES[0]);
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptClick = () => {
    setIsTyping(true);
    const newMessage = TERMINAL_MESSAGES[
      Math.floor(Math.random() * TERMINAL_MESSAGES.length)
    ];
    setCurrentMessage('');
    setTimeout(() => {
      setCurrentMessage(newMessage);
      setIsTyping(false);
    }, 500);
  };

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
            <span className="text-gray-500 font-['Courier_New']">/</span>
            <a href="/CalebWD/ProjectPO" className="text-gray-500 hover:text-gray-300 transition-colors font-['Courier_New'] text-sm">
              ProjectPO
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="w-[95%] mx-auto">
          <div className="pt-[5vh]">
            <h1 className="text-[#4cb1ff] text-7xl font-bold drop-shadow-[0_0_10px_rgba(76,177,255,0.3)] font-['Microsoft_Sans_Serif']">
              Caleb Beck
            </h1>
            <p className="text-white/50 mt-2 font-['Microsoft_Sans_Serif'] flex items-center gap-2">
              <span className="text-2xl">Professional</span>
              <span className="text-sm">•</span>
              <span className="text-2xl">Clean</span>
              <span className="text-sm">•</span>
              <span className="text-2xl">Concise</span>
            </p>

            {/* Project Description */}
            <div className="mt-16">
              <p className="text-white/90 text-xl font-['Microsoft_Sans_Serif']">
                This project in it's entirety is available on my professional github page, please feel free to use any code, design, idea or creative choice in your own projects with credit back to me. Thank you!
              </p>
              <a href="#" className="mt-4 inline-flex items-center text-[#4cb1ff] hover:text-[#7cc5ff] transition-colors font-['Microsoft_Sans_Serif'] text-2xl">
                Go check it out yourself <span className="ml-2">→</span>
              </a>

              {/* Terminal Interface */}
              <div className="mt-8 bg-[#11101b] border-[4px] border-[#1a182d] rounded-xl p-4">
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={handlePromptClick}
                    className="text-[#4cb1ff] font-mono text-2xl leading-none cursor-pointer hover:text-[#7cc5ff] transition-colors drop-shadow-[0_0_5px_rgba(76,177,255,0.5)]"
                  >
                    {'>_'}
                  </button>
                  <div className="font-mono text-white/90 overflow-hidden whitespace-nowrap text-xl">
                    <span 
                      className={`inline-block ${
                        isTyping ? 'w-0' : 'animate-[typing_2s_steps(40,end)]'
                      }`}
                    >
                      {currentMessage}
                    </span>
                    <span className="inline-block w-2 h-5 bg-white/90 ml-1 animate-[blink_1s_infinite]"></span>
                  </div>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mt-16">
                <h3 className="text-white/90 font-['Microsoft_Sans_Serif'] text-xl mb-4">This project uses:</h3>
                <div className="flex gap-6">
                  {TECHNOLOGIES.map((tech) => (
                    <a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-[#11101b] border-[4px] border-[#1a182d] rounded-xl p-3 flex items-center justify-center hover:border-[#4cb1ff] transition-colors"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}