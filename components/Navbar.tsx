'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full bg-white border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between'>
        
   
        <Link href="/" className='bg-blue-600 text-white font-extrabold text-lg px-3 py-1.5 rounded-lg tracking-wider'>
          TTRidz
        </Link>

        <div className='hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium'>
          <Link href="/browse" className='hover:text-blue-600 transition-colors'>Browse Cars</Link>
          <Link href="/sell" className='hover:text-blue-600 transition-colors'>Sell Your Car</Link>
          <Link href="/about" className='hover:text-blue-600 transition-colors'>About</Link>
          <Link href="/help" className='hover:text-blue-600 transition-colors'>Help</Link>
        </div>

        <div className='flex items-center gap-4'>
          <Link href="/search" className='hidden md:flex items-center gap-2 text-xs text-blue-600 bg-white border border-blue-600 px-3 py-2 rounded-lg hover:border-gray-300'>
            <span>Search Listings</span>
      
          </Link>

    
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-600 focus:outline-none p-2 rounded-lg hover:bg-gray-50'
            aria-label="Toggle Menu"
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg animate-fadeIn'>
          <Link 
            href="/browse" 
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50'
          >
            Browse Cars
          </Link>
          <Link 
            href="/sell" 
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50'
          >
            Sell Your Car
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50'
          >
            About
          </Link>
          <Link 
            href="/help" 
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium text-gray-700 hover:text-blue-600 py-2'
          >
            Help
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar