import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import pic from "/images/IMG-20240906-WA0019.jpg"

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={pic} 
                alt="About Me" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">1+ Years</p>
                <p className="text-indigo-100">Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Front-end Developer with expertise in building modern web applications. 
              With over 1 years of experience, I've worked on some of projects 
              from small business websites to complex enterprise applications.
            </p>
            <p className="text-gray-600 mb-8">
              My approach combines technical expertise with creative problem-solving. I believe in 
              writing clean, maintainable code and creating intuitive user experiences that help 
              businesses achieve their goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <span>Thoothukudi, TamilNadu</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={20} className="text-indigo-600 mr-2" />
                <span>Available for Freelance</span>
              </div>
              <div className="flex items-center">
                <GraduationCap size={20} className="text-indigo-600 mr-2" />
                <span>MSc Computer Science</span>
              </div>
              <div className="flex items-center">
                <Award size={20} className="text-indigo-600 mr-2" />
                <span>Award Winning Developer</span>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;