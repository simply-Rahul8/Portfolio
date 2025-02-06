import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/Portfolio/RY.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Yaswanth Rahul Yarlagadda</h1>
          <h2 className="text-2xl text-gray-700 mb-6">Software Developer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A highly-motivated software developer specializing in cloud computing, full-stack development, and AI-operated applications. 
            Experienced in Python, JavaScript, React.js, Node.js, AWS, Docker, and Kubernetes, with a focus on building scalable, secure, 
            and high-performance solutions.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/simply-Rahul8" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/ry-/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:yashwanthrahul5126@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Development', 'Cloud & Tools', 'Additional Skills'].map((category, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {getSkills(category).map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center gap-2">
            <User className="w-8 h-8 text-blue-600" />
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Feel free to reach out if you'd like to connect!
          </p>
          <a
            href="mailto:yashwanthrahul5126@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Email <Mail className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Yaswanth Rahul Yarlagadda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Helper function to get skills by category
function getSkills(category: string) {
  const skills = {
    'Development': [
      'Python, JavaScript, C, R',
      'React.js, Node.js, React Native',
      'HTML, CSS, TypeScript',
      'SQL Databases'
    ],
    'Cloud & Tools': [
      'AWS Cloud Services',
      'Docker & Kubernetes',
      'Git Version Control',
      'Linux, Windows, macOS'
    ],
    'Additional Skills': [
      'Problem Solving',
      'Prompt Engineering',
      'Research & Analysis',
      'Team Collaboration'
    ]
  };
  return skills[category as keyof typeof skills] || [];
}

// Project data
const projects = [
  {
    title: 'EC2 Instance Communication',
    description: 'Implemented secure communication between AWS EC2 instances with web server monitoring and traffic analysis.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    technologies: ['AWS', 'Linux', 'Web Server', 'Security'],
    link: '#',
  },
  {
    title: 'GAMEPLAN Sports App',
    description: 'A React Native mobile application for trainers and students featuring GPS-based attendance and Firebase integration.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    technologies: ['React Native', 'Firebase', 'GPS', 'Mobile Development'],
    link: '#',
  },
  {
    title: 'COVID-19 Simulation',
    description: 'Interactive COVID-19 spread simulation tool built with Python and Streamlit for data visualization.',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'Streamlit', 'Data Visualization'],
    link: '#',
  },
  {
    title: 'CNN vs Capsule Networks',
    description: 'Research project comparing CNN and Capsule Networks for satellite image classification of urban and forest areas.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800',
    technologies: ['TensorFlow', 'Deep Learning', 'Computer Vision'],
    link: '#',
  }
];

export default App;
