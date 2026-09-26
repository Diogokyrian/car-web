import React from 'react'

const BrandLogo = () => {
  return (
    <div className='w-full bg-white py-10 border-b border-gray-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between gap-6   transition-all'>
        
   
        <div className='flex items-center justify-center h-8'>
          <svg className="w-16 h-6 fill-current text-gray-700" viewBox="0 0 100 30">
            <circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="4"/>
            <circle cx="35" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="4"/>
            <circle cx="55" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="4"/>
            <circle cx="75" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="4"/>
          </svg>
        </div>

        <div className='flex items-center justify-center h-8'>
          <span className='font-serif italic font-bold text-xl tracking-tighter bg-blue-700 text-white px-3 py-0.5 rounded-full shadow-xs'>Ford</span>
        </div>

        <div className='flex items-center justify-center h-8'>
          <span className='font-bold text-lg tracking-widest border-2 border-gray-700 rounded-full px-2 py-0.5 text-gray-800'>H</span>
        </div>

        <div className='flex items-center justify-center h-8'>
          <span className='font-black text-xl tracking-tighter text-gray-800 border border-gray-700 px-1.5 rounded'>H</span>
        </div>

  
        <div className='flex items-center justify-center h-8'>
          <span className='font-semibold text-sm tracking-widest text-gray-800'>INFINITI</span>
        </div>

        <div className='flex items-center justify-center h-8'>
          <span className='font-black text-lg tracking-widest text-red-600 border border-red-600 px-2 py-0.5 rounded'>KIA</span>
        </div>

        <div className='flex items-center justify-center h-8'>
          <div className='w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold text-[10px] text-gray-800 bg-blue-100'>
            BMW
          </div>
        </div>

        <div className='flex items-center justify-center h-8'>
          <span className='font-bold text-sm tracking-widest border-y-2 border-gray-700 px-2 py-1 text-gray-800'>NISSAN</span>
        </div>

        <div className='flex items-center justify-center h-8'>
          <span className='font-bold text-sm tracking-widest text-gray-800'>TOYOTA</span>
        </div>

      </div>
    </div>
  )
}

export default BrandLogo
