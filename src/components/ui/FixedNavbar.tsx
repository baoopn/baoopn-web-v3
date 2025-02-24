import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, ChevronDown, X } from 'lucide-react'
import '../../styles/navbar.css'
import LogoLong from './LogoLong'

const links = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Projects', route: '/projects' },
  { name: 'Contact', route: '/contact' },
]

const sublinks = [
  { name: 'Now Listening', route: '/listening' },
  { name: 'Games', route: '/games' },
]

const FixedNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--dark-pink)] text-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 bg-[var(--primary-pink)] rounded-full flex items-center justify-center">
            <img
              src="https://cdn.baoopn.com/data/img/Baoo.png"
              alt="Bao's Icon"
              width={36}
              height={36}
              className="rounded-full"
            />
          </div> */}
          <LogoLong 
            width={144}
            height={40}
            color="#c6e1ff"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-0 items-center">
          {links.map(link => (
            <div key={link.name} className="hover:bg-[var(--less-dark-pink)] rounded-md">
              <Link to={link.route} className="block px-3 py-2 animated-underline">
                {link.name}
              </Link>
            </div>
          ))}
          <div className="relative group">
            <button className="flex items-center hover:bg-[var(--less-dark-pink)] rounded-md px-4 py-2" tabIndex={0}>
              More <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-[var(--less-dark-pink)] rounded-md shadow-lg py-1 z-10 hidden group-focus-within:block">
              {sublinks.map(sublink => (
                <Link key={sublink.name} to={sublink.route} className="block px-4 py-2 w-full hover:bg-[var(--dark-pink)] animated-underline">
                  {sublink.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-[var(--dark-pink)] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b bg-[var(--dark-pink)]">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="py-4">
          {links.map(link => (
            <div key={link.name} className="hover:bg-[var(--primary-pink)] rounded-md">
              <Link to={link.route} className="block w-full px-4 py-2">
                {link.name}
              </Link>
            </div>
          ))}
          <div>
            <button
              className={`flex items-center justify-between rounded-md w-full px-4 py-2 ${isSubmenuOpen ? 'bg-[var(--less-dark-pink)]' : 'bg-[var(--dark-pink)]'} hover:bg-[var(--primary-pink)]`}
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              More <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`bg-[var(--less-dark-pink)] overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen ? 'max-h-40' : 'max-h-0'}`}>
              {sublinks.map(sublink => (
                <Link key={sublink.name} to={sublink.route} className="block px-6 py-2 w-full hover:bg-[var(--primary-pink)]">
                  {sublink.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default FixedNavbar