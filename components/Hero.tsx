import React from 'react'
import Image from 'next/image'
import { Search, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className='w-full bg-[#f4f7fb] pt-8 pb-16 px-6 md:px-16 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
        
        <div className='lg:col-span-7 flex flex-col gap-6 z-10'>
          <div className='space-y-3'>
            <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter leading-none'>
              Buy & Sell cars in TTRidz 
            </h1>
            <p className='text-black text-lg font-bold md:text-base'>
              Browse through hundreds of used and new cars for sale
            </p>
          </div>

          <div className='flex flex-wrap gap-2 text-xs font-medium text-gray-600'>
            <span className='bg-white border text-blue-900 border-white px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>SUVs under $20k</span>
            <span className='bg-white border text-blue-900 border-white px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>Used Sedans</span>
            <span className='bg-white border text-blue-900 border-white  px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>Electric Cars</span>
            <span className='bg-white border text-blue-900 border-white px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>Sports Cars</span>
            <span className='bg-white border text-blue-900 border-white  px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>Family Vans</span>
            <span className='bg-white border text-blue-900 border-white px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>Luxury Brands</span>
            <span className='bg-white border text-blue-900 border-white px-7 py-5 rounded-full shadow-xs hover:border-blue-600 cursor-pointer'>Trucks</span>
          </div>

    
          <div className='bg-white rounded-2xl p-3 md:p-5 shadow-xl border border-gray-100 flex flex-col gap-4 mt-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
    
              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-black'></label>
                <div className='flex items-center justify-between border border-gray-200 rounded-lg px-2 py-2 text-sm text-black bg-gray-50/50'>
                  <span> Make</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-gray-500'></label>
                <div className='flex items-center justify-between border border-gray-200 rounded-lg px-2 py-2 text-sm text-black bg-gray-50/50'>
                  <span>Model</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-gray-500'></label>
                <div className='flex items-center justify-between border border-gray-200 rounded-lg px-2 py-2 text-sm text-black bg-gray-50/50'>
                  <span>Min-Price</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-gray-500'></label>
                <div className='flex items-center justify-between border border-gray-200 rounded-lg px-2 py-2 text-sm text-black bg-gray-50/50'>
                  <span>Region</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition-colors text-lg shadow-md flex items-center justify-center gap-2 mt-2'>
              
              Search Listings 
            </button>
          </div>
        </div>

        <div className='lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-112.5 flex items-center justify-center'>
          <div className='relative w-full h-full'>
            <Image 
              src='/car.png' 
              alt='TTRidz Featured SUV' 
              fill 
              className='object-contain drop-shadow-2xl'
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero