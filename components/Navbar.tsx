import React from 'react'
import Link from 'next/link'
import { Menu, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='w-full bg-white border-b border-gray-100 py-4 px-6 md:px-16 flex items-center justify-between sticky top-0 z-50'>

      <Link href="/" className='flex items-center gap-2'>
        <div className='bg-blue-600 text-white font-black px-2.5 py-1 rounded text-lg tracking-wider'>
          TTRidz
        </div>
      </Link>

      <nav className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-600'>
        <Link href="/browse" className='hover:text-blue-600 transition-colors'>Browse Cars</Link>
        <Link href="/sell" className='hover:text-blue-600 transition-colors'>Sell Your Car</Link>
        <Link href="/about" className='hover:text-blue-600 transition-colors'>About</Link>
        <Link href="/help" className='hover:text-blue-600 transition-colors'>Help</Link>
      </nav>

    
      <div className='flex items-center gap-4'>
        <Link 
          href="/search" 
          className='hidden sm:flex items-center gap-2 text-xs font-semibold bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm'
        >
          <Search size={14} />
          Search Listings 
        </Link>
        <button className='md:hidden text-gray-700'>
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Navbar