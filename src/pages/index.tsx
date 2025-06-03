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
      <section className="py-20" >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
    Hi, I'm <span className="text-primary-600">Bhanu Pratap Singh</span>
  </h1>
  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
     A passionate full-stack developer creating amazing web experiences with modern technologies like React, Next.js, and TypeScript.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/projects" className="btn-primary">
      View My Work
    </Link>
    <Link href="/about" className="bg-gray-200 hover:bg-gray-300...">
      Learn More About Me
    </Link>
  </div>

      </section>

      <section className="py-16" >
        <h2 className="text-3xl font-bold text-gray-800 mb-12" > Skills & Technologies </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" >
          {['React', 'Next.js','Typescript','Tailwind Css'].map((skill)=>(
            <div key={skill} className="card p-6 text-center" >
              <h3 className="font-semibold text-gray-800"> {skill} </h3>
              </div>
          ))}
        </div>
      </section>



    </div>
  );
}
