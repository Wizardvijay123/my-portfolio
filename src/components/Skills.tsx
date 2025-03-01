import React from 'react';
import { Code, Database, Layout, Smartphone, Server, Figma } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-indigo-600" />,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      skills: ["Python", "Django", "PHP", "Java", ]
    },
    // {
    //   title: "Database",
    //   icon: <Database className="w-8 h-8 text-indigo-600" />,
    //   skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "GraphQL"]
    // },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      skills: [ "Flutter",]
    },
    // {
    //   title: "UI/UX Design",
    //   icon: <Figma className="w-8 h-8 text-indigo-600" />,
    //   skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Wireframing", "Prototyping"]
    // },
    // {
    //   title: "Other Skills",
    //   icon: <Code className="w-8 h-8 text-indigo-600" />,
    //   skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Cypress", "RESTful APIs", "Agile/Scrum"]
    // }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a wide range of technologies in the web development world.
            Here's an overview of my technical skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">My Expertise Level</h3>
          
          <div className="space-y-6">
            {[
              { name: "Frontend Development", percentage: 95 },
              { name: "Backend Development", percentage: 90 },
              { name: "UI/UX Design", percentage: 85 },
              { name: "Mobile Development", percentage: 80 },
              { name: "DevOps", percentage: 75 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-indigo-600 font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;