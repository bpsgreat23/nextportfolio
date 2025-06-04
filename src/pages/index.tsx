import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
         <title>Home | Your Portfolio</title>
              <meta name="description" content="Welcome to my portfolio website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-20 bg-gradient-to-r from-primary-100 via-white to-primary-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center">
          Hi, I'm <span className="text-primary-600">Bhanu Pratap Singh</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          A passionate full-stack developer creating amazing web experiences with modern technologies like React, Next.js, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/projects" className="btn-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
            View My Work
          </Link>
          <Link href="/about" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center">
            Learn More About Me
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {['React', 'Next.js', 'Typescript', 'Tailwind CSS'].map((skill) => (
            <div key={skill} className="card p-6 text-center hover:scale-105 transform transition-transform duration-300">
              <h3 className="font-semibold text-gray-900">{skill}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
