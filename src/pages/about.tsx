import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Your Portfolio</title>
        <meta name="description" content="Learn more about me and my background" />
      </Head>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-700">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
              <span className="text-6xl text-white">👨‍💻</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello! I'm a Developer</h2>
            <p className="text-gray-700 mb-4">
              I'm a passionate full-stack developer who loves 
              building web applications. I love creating efficient, scalable solutions 
              and learning new technologies.
            </p>
            <p className="text-gray-700 mb-6">
              When I'm not coding, you can find me exploring new frameworks, 
              contributing to open source projects, or sharing knowledge with 
              the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Clean Code'].map((trait) => (
                <span key={trait} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Future Senior Developer</h4>
              <p className="text-gray-700"> Google • 2027 - Present</p>
              <p className="text-sm text-gray-500 mt-1">
                Leading FullStack Development using React, Next.js, and TypeScript
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Full Stack Developer</h4>
              <p className="text-gray-700">Ai Arsenal Private Limited • 2024 - 2027</p>
              <p className="text-sm text-gray-500 mt-1">
                Built full-stack applications with Node.js and React
              </p>
            </div>
          </div>
        </div>

        <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Bachelor of Computer Science</h4>
              <p className="text-gray-700">University Name • 2017 - 2021</p>
              <p className="text-sm text-gray-500 mt-1">
                Focus on Software Engineering and Web Development
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Certifications</h4>
              <p className="text-gray-700">AWS Certified Developer</p>
              <p className="text-gray-700">Google Cloud Professional</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
