import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? 'text-primary-600 font-semibold' : 'text-gray-600 hover:text-primary-500'
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Portfolio
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/" className={`transition-colors duration-200 ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors duration-200 ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/projects" className={`transition-colors duration-200 ${isActive('/projects')}`}>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}