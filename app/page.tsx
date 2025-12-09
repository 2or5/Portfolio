"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowDown,
  Send,
  Database,
  Code2,
  Layout,
  Palette,
  Rocket,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg grid-pattern relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#222]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold gradient-text">
            Portfolio
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors link-hover">
              About
            </a>
            <a href="#skills" className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors link-hover">
              Skills
            </a>
            <a href="#projects" className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors link-hover">
              Projects
            </a>
            <a href="#contact" className="btn-primary text-sm py-2 px-4">
              Contact
            </a>
          </div>
        </div>
      </nav>

      Hero Section
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 animate-fade-in-up">
                <p className="text-[#00ff88] font-mono text-xl tracking-widest uppercase mb-4">
                  Welcome to my portfolio
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="block gradient-text">
                    Nazar Bokalo
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#888] max-w-lg">
                  A passionate Software Developer crafting
                  beautiful digital experiences with modern technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
                <a href="#projects" className="btn-primary">
                  View My Work
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-6 animate-fade-in-up animation-delay-400">
                <a href="https://github.com/2or5" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#00ff88] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:nazarbokalo0@gmail.com" className="text-[#888] hover:text-[#00ff88] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Hero Visual - Code Window */}
            <div className="relative animate-fade-in animation-delay-300 hidden lg:block">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00ff88]/20 to-[#ff6b35]/20 blur-3xl" />
                <div className="relative rounded-2xl bg-[#141414] border border-[#222] overflow-hidden">
                  <div className="p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                    </div>
                    <pre className="text-sm overflow-hidden">
                      <code>
                        <span className="text-[#888]">{"// Welcome!"}</span>
                        {"\n"}
                        <span className="text-[#c792ea]">const</span>{" "}
                        <span className="text-[#82aaff]">developer</span>{" "}
                        <span className="text-[#89ddff]">=</span> {"{"}
                        {"\n  "}
                        <span className="text-[#f78c6c]">name</span>
                        <span className="text-[#89ddff]">:</span>{" "}
                        <span className="text-[#c3e88d]">&quot;Nazar Bokalo&quot;</span>,
                        {"\n  "}
                        <span className="text-[#f78c6c]">skills</span>
                        <span className="text-[#89ddff]">:</span> [
                        {"\n    "}
                        <span className="text-[#c3e88d]">&quot;Java/Kotlin&quot;</span>,
                        {"\n    "}
                        <span className="text-[#c3e88d]">&quot;React&quot;</span>,
                        {"\n    "}
                        <span className="text-[#c3e88d]">&quot;SQL&quot;</span>,
                        {"\n  "}],
                        {"\n  "}
                        <span className="text-[#f78c6c]">passion</span>
                        <span className="text-[#89ddff]">:</span>{" "}
                        <span className="text-[#00ff88]">true</span>
                        {"\n"}
                        {"}"};
                      </code>
                    </pre>
                  </div>
                </div>
                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 bg-[#141414] border border-[#222] rounded-xl p-3">
                  <Code2 className="w-6 h-6 text-[#00ff88]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-[#00ff88] font-mono text-xl tracking-widest uppercase mb-4">About Me</p>
              <h2 className="section-title">
                Turning ideas into <span className="gradient-text">reality</span>
              </h2>
              <div className="space-y-4 text-[#888] text-lg leading-relaxed">
                <p>
                  I&apos;m a passionate developer with a love for creating elegant solutions
                  to complex problems. With expertise in modern technologies, I build
                  applications that are functional and delightful to use.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies
                  and contributing to my projects.
                </p>
              </div>
              <div className="flex justify-center gap-12 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00ff88]">2+</div>
                  <div className="text-sm text-[#888]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00ff88]">10+</div>
                  <div className="text-sm text-[#888]">Projects Done</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4"> 
              {[
                { icon: Code2, title: "Backend Development", description: "Building responsive server-side applications using modern frameworks." },
                { icon: Database, title: "Database Management", description: "Designing efficient schemas and managing data using modern frameworks." },
                { icon: Layout, title: "Frontend Development", description: "Creating responsive user interfaces and Page Applications leveraging a modern tech stack." },
              ].map((service, index) => (
                <div key={index} className="bg-[#141414] border border-[#222] rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-5">
                    <div className="p-5 rounded-xl bg-[#00ff88]/10 text-[#00ff88] mt-2">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-[#888] text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00ff88] font-mono text-xl tracking-widest uppercase mb-4">My Skills</p>
            <h2 className="section-title">Technologies I <span className="gradient-text">work with</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Frontend", skills: ["React", "JavaScript", "TypeScript", "Tailwind", "HTML/CSS", "Rest API", "Next.js", "Redux", "npm"] },
              { category: "Backend", skills: ["Java", "Kotlin", "PostgreSQL/MySql", "Spring Boot", "MongoDB", "Hibernate/JPA/JOOQ", "Maven/Gradle"] },
              { category: "Tools", skills: ["Git", "Docker", "Jira", "CI/CD", "Postman/Swagger", "IntelliJ IDEA", "WebStorm/VS Code/Cursor"]},
            ].map((group, index) => (
              <div key={index} className="bg-[#141414] border border-[#222] rounded-2xl p-6 card-hover">
                <h3 className="text-lg font-semibold mb-4 text-[#00ff88]">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00ff88] font-mono text-sm tracking-wider uppercase mb-4">My Work</p>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Project 1", description: "Description of your first project goes here.", tags: ["React", "Node.js"], link: "#", github: "#" },
              { title: "Project 2", description: "Description of your second project goes here.", tags: ["Kotlin", "Android"], link: "#", github: "#" },
              { title: "Project 3", description: "Description of your third project goes here.", tags: ["Next.js", "PostgreSQL"], link: "#", github: "#" },
              { title: "Project 4", description: "Description of your fourth project goes here.", tags: ["Java", "Spring"], link: "#", github: "#" },
            ].map((project, index) => (
              <div key={index} className="group bg-[#141414] border border-[#222] rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-[#00ff88]" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-[#00ff88] transition-colors">{project.title}</h3>
                  <p className="text-[#888] text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-[#00ff88]/10 text-[#00ff88]">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <a href={project.link} className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00ff88]">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00ff88]">
                      <Github className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00ff88] font-mono text-sm tracking-wider uppercase mb-4">Get In Touch</p>
            <h2 className="section-title">Let&apos;s work <span className="gradient-text">together</span></h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto mt-4">
              Have a project in mind? Feel free to reach out!
            </p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#222] focus:border-[#00ff88] focus:outline-none" />
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#222] focus:border-[#00ff88] focus:outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#222] focus:border-[#00ff88] focus:outline-none" />
            <textarea rows={6} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#222] focus:border-[#00ff88] focus:outline-none resize-none" />
            <button type="submit" className="btn-primary w-full justify-center">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-[#888] mb-4">Or reach out directly</p>
            <div className="flex items-center justify-center gap-6">
              <a href="mailto:nazarbokalo0@gmail.com" className="text-[#888] hover:text-[#00ff88]">nazarbokalo0@gmail.com</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-8 px-6 border-t border-[#222]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888] text-sm">© {new Date().getFullYear()} Nazar Bokalo. All rights reserved.</p>
          <p className="text-[#888] text-sm font-mono">
            Built with <span className="text-[#00ff88]">Next.js</span> & <span className="text-[#00ff88]">Tailwind CSS</span>
          </p>
        </div>
      </footer> */}
    </div>
  );
}