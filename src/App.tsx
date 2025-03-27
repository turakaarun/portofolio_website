import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, Twitter, Code, Palette, Database, Globe, Server, Lock, Building } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-white/20">
              <img
                src="static/images/arun.jpeg"
                alt="Arun"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            arunkumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            UI / UX Designer | Graphic Designer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/turakaarun" className="hover:text-gray-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/arunkumarturaka/" className="hover:text-gray-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:turakaarunkumar@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {skill.icon}
                  <h3 className="text-2xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-white/50"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Experience
          </h2>
          
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-white/20"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-white"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Building className="w-6 h-6 text-gray-400" />
                    <span className="text-xl font-bold">{exp.company}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-200">{exp.role}</h3>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300">• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Education
          </h2>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-white/20"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-white"></div>
                <div className="space-y-2">
                  <span className="text-sm text-gray-400">{edu.year}</span>
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <p className="text-xl text-gray-300">{edu.school}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Projects Section */}
<section className="py-24 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
      Featured Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {projects.map((project, index) => (
        <div key={index} className="space-y-8">
          <div className="flex flex-col gap-8">
            <div className="flex-1 group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform duration-300">
              <img
                src={project.images[0]}
                alt={`${project.title} - Overview`}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
           
          </div>
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
            <p className="text-xl text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    {/* Other Work Section */}
<section className="py-24 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
      Other Work
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {otherWork.map((work, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform duration-300 flex justify-center items-center"
        >
          <img
            src={work.images[0]} // Fixed image source
            alt={work.title}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex justify-center items-center text-center p-6">
            <h3 className="text-2xl font-bold text-white">{work.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
          Have a project in mind? Let's chat and bring your ideas to life. 
          </p>
          <p></p>
          <a
            href="mailto:turakaarunkumar@gmail.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

const skills = [
  {
    category: "Design Skills",
    icon: <Code className="w-8 h-8 text-blue-400" />,
    items: [
      "UI/UX Design",
      "Interaction Design",
      "Visual Design Product",
      "Rapid Prototyping",
      "User Personas"
    ]
  },
  {
    category: "Design Tools",
    icon: <Palette className="w-8 h-8 text-purple-400" />,
    items: [
      "Adobe XD",
      "Figma",
      "Photoshop",
      "Adobe InDesign",
      "Adobe Illustrator"
    ]
  },
  {
    category: "Technical Skills",
    icon: <Server className="w-8 h-8 text-green-400" />,
    items: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
    ]
  },
];

const experience = [

  {
    company: "FreeLancer",
    role: "Graphic Designer",
    period: "August 2024 - Present",
    achievements: [
      "Designed logos, posters, and presentation graphics for student projects",
      "Used Adobe Illustrator and Photoshop to create high-quality visuals for digital formats",
      "Delivered designs that followed project themes, colors, and content needs",
      "Communicated with students to understand their ideas and revised designs based on feedback"
    ]
  },
  {
    company: "FreeLancer",
    role: "UI/UX Designer",
    period: "Jan 2024 - August",
    achievements: [
      "Created UI layouts, screen designs, and wireframes for student web and mobile app projects",
      "Built interactive prototypes in Figma to show user flow and basic functionality",
      "Focused on clean, responsive, and user-friendly designs",
      "Worked closely with student developers to make sure the design matched the project goals"
    ]
  }
];

const education = [
  {
    year: "2024 - Present",
    degree: "Master in Computer Science",
    school: "Kent State University",
    description: "Skilled in Adobe XD, Illustrator, InDesign, and basic Premiere Pro, with a strong focus on creative design and digital experience."
  },
  {
    year: "2020 - 2023",
    degree: "Computer Science and Systems Engineering",
    school: "Sree Vidyanikethan Engineering College",
    description: "Published research paper on Rainfall Prediction Using Machine Learning"
  }
];

const projects = [
  {
    title: "AI-Powered Design System",
    description: "A revolutionary design system that uses artificial intelligence to automatically generate and adapt UI components based on brand guidelines and user behavior. The system learns from user interactions to improve component suggestions and accessibility.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
      
    ],
    technologies: ["React", "TypeScript", "TensorFlow.js", "Node.js", "GraphQL", "AWS"]
  },
  {
    title: "Blockchain-Based Supply Chain",
    description: "An enterprise-level supply chain management platform leveraging blockchain technology for transparent and secure tracking of goods. Features real-time monitoring, smart contract automation, and comprehensive analytics dashboard.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069",
    ],
    technologies: ["Solidity", "React", "Web3.js", "Node.js", "PostgreSQL", "Docker"]
  }
];

const otherWork = [
  {
    title: "Creative Poster Design",
    description: "A collection of visually striking posters designed for various brands, events, and campaigns. Each poster is crafted with a unique artistic approach to effectively communicate the message.",
    images: [
      "static/images/poster_1.png"
    ],
    technologies: ["Photoshop", "Illustrator", "Figma"]
  },
  {
    title: "Logo & Brand Identity",
    description: "A diverse range of logo designs created for startups, businesses, and personal brands. These logos incorporate modern design trends with timeless appeal.",
    images: [
     "static/images/logos_1.jpeg"
    ],
    technologies: ["Illustrator", "CorelDRAW", "Figma"]
  },
];


export default App;