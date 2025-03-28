import React from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import dp from "/images/me.jpg"; 

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-indigo-100 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-indigo-600">Hello, I'm</span>
              <br />
              <span className="text-gray-800">Vijay</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Front-end Developer</h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
              Let's turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View My Work
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="rounded-[180px] overflow-hidden border-4 border-white shadow-xl">
                <img src={dp} alt="Vijay" className="w-full h-full object-cover"/>
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">1+</span>
                </div>
                <span className="absolute -bottom-6 right-0 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Years Experience
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
