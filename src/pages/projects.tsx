import Head from 'next/head'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  imageUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/username/task-manager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive charts.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "CSS Modules"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-app"
  }
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Your Portfolio</title>
        <meta name="description" content="Check out my latest projects and work" />
      </Head>

      <div className="px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents 
            a different challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="card p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-4 flex items-center justify-center shadow-md">
                <span className="text-4xl text-white">🚀</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                {project.demoUrl && (
                  <Link 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    Live Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex-1 text-center shadow-md"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h2>
          <p className="text-gray-700 mb-6">
            Check out my GitHub for more projects and contributions to open source.
          </p>
          <Link 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Visit My GitHub
          </Link>
        </div>
      </div>
    </>
  )
}
