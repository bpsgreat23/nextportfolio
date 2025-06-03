import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Your Portfolio</title>
        <meta name="description" content="Learn more about me and my background" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-6xl text-white">👨‍💻</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hello! I'm a Developer</h2>
            <p className="text-gray-600 mb-4">
              I'm a passionate full-stack developer with over 3 years of experience 
              building web applications. I love creating efficient, scalable solutions 
              and learning new technologies.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new frameworks, 
              contributing to open source projects, or sharing knowledge with 
              the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Clean Code'].map((trait) => (
                <span key={trait} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Senior Frontend Developer</h4>
                <p className="text-gray-600">Tech Company • 2022 - Present</p>
                <p className="text-sm text-gray-500 mt-1">
                  Leading frontend development using React, Next.js, and TypeScript
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Full Stack Developer</h4>
                <p className="text-gray-600">Startup Inc. • 2021 - 2022</p>
                <p className="text-sm text-gray-500 mt-1">
                  Built full-stack applications with Node.js and React
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Bachelor of Computer Science</h4>
                <p className="text-gray-600">University Name • 2017 - 2021</p>
                <p className="text-sm text-gray-500 mt-1">
                  Focus on Software Engineering and Web Development
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Certifications</h4>
                <p className="text-gray-600">AWS Certified Developer</p>
                <p className="text-gray-600">Google Cloud Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}