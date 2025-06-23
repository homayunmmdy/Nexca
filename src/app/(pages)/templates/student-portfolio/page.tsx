'use client'
import React, { useState, useEffect } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaCode,
    FaGraduationCap,
    FaBrain,
    FaRocket,
    FaHeart,
    FaEye,
    FaStar,
    FaCalendar,
    FaArrowRight,
    FaDownload,
    FaExternalLinkAlt
} from 'react-icons/fa';
import Image from "next/image";

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'popular', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            id: 1,
            title: "AI-Powered Study Assistant",
            description: "A machine learning application that helps students optimize their learning patterns using natural language processing.",
            tech: ["Python", "TensorFlow", "React", "FastAPI"],
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
            github: "#",
            live: "#",
            status: "Featured",
            views: 1250,
            likes: 89
        },
        {
            id: 2,
            title: "Campus Event Manager",
            description: "Full-stack web application for managing university events with real-time notifications and social features.",
            tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
            github: "#",
            live: "#",
            status: "New",
            views: 892,
            likes: 67
        },
        {
            id: 3,
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for analyzing student performance data with advanced charting and filtering capabilities.",
            tech: ["D3.js", "React", "TypeScript", "Express"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            github: "#",
            live: "#",
            status: "Popular",
            views: 2341,
            likes: 156
        }
    ];

    const popularItems = [
        {
            title: "Machine Learning Study Notes",
            category: "Academic",
            views: 3420,
            date: "2024-05-15"
        },
        {
            title: "React Best Practices Guide",
            category: "Development",
            views: 2890,
            date: "2024-05-10"
        },
        {
            title: "Database Design Principles",
            category: "Academic",
            views: 2156,
            date: "2024-04-28"
        },
        {
            title: "Algorithm Visualization Tool",
            category: "Project",
            views: 1987,
            date: "2024-04-20"
        }
    ];

    const skills = [
        { name: "JavaScript/TypeScript", level: 90, category: "Frontend" },
        { name: "React/Next.js", level: 85, category: "Frontend" },
        { name: "Python", level: 88, category: "Backend" },
        { name: "Machine Learning", level: 75, category: "AI/ML" },
        { name: "Node.js", level: 80, category: "Backend" },
        { name: "Database Design", level: 82, category: "Data" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
         

            {/* Hero Section */}
            <section id="hero" className="pt-20 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div
                            className={`transform transition-all duration-1000 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                                C
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cass</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Computer Science student passionate about AI, web development, and creating innovative solutions
                                that make a difference in people&apos;s lives.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2">
                                    View My Work <FaArrowRight />
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2">
                                    Download CV <FaDownload />
                                </button>
                            </div>
                            <div className="flex justify-center space-x-6">
                                {[
                                    { icon: FaGithub, color: 'hover:text-gray-800' },
                                    { icon: FaLinkedin, color: 'hover:text-blue-600' },
                                    { icon: FaTwitter, color: 'hover:text-blue-400' },
                                    { icon: FaEnvelope, color: 'hover:text-red-500' }
                                ].map(({ icon: Icon, color }, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`text-gray-600 ${color} text-2xl transition-all transform hover:scale-125`}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Currently pursuing my Computer Science degree while exploring the intersection of technology and human experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaGraduationCap,
                                title: "Student Life",
                                description: "Third-year Computer Science student at University, maintaining a 3.8 GPA while actively participating in tech clubs and hackathons."
                            },
                            {
                                icon: FaCode,
                                title: "Development",
                                description: "Passionate full-stack developer with experience in modern web technologies, mobile apps, and machine learning projects."
                            },
                            {
                                icon: FaBrain,
                                title: "AI Enthusiast",
                                description: "Fascinated by artificial intelligence and its potential to solve real-world problems. Currently researching NLP applications."
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all">
                                <item.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Projects */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Projects</h2>
                        <p className="text-gray-600 text-lg">Recent work showcasing my skills and creativity</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={715}
                                        height={192}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Featured' ? 'bg-yellow-100 text-yellow-800' :
                            project.status === 'New' ? 'bg-green-100 text-green-800' :
                                'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaEye /> {project.views}
                      </span>
                                            <span className="flex items-center gap-1">
                        <FaHeart /> {project.likes}
                      </span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <a href={project.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <FaGithub />
                                            </a>
                                            <a href={project.live} className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Content */}
            <section id="popular" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Most Popular</h2>
                        <p className="text-gray-600 text-lg">Content that resonates with the community</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {popularItems.map((item, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaEye /> {item.views.toLocaleString()} views
                  </span>
                                    <span className="flex items-center gap-1">
                    <FaCalendar /> {new Date(item.date).toLocaleDateString()}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
                        <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-semibold text-gray-900">{skill.name}</span>
                                    <span className="text-sm text-gray-500">{skill.category}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="text-right text-sm text-gray-600 mt-1">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Always open to discussing new opportunities, collaborations, or just chatting about technology and innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                            <FaEnvelope /> Get In Touch
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                            <FaRocket /> View Resume
                        </button>
                    </div>
                </div>
            </section>

       
        </div>
    );
};

export default Portfolio;