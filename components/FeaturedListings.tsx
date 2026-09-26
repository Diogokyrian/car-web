import React from 'react'
import Image from 'next/image'
import { Gauge, Calendar, Settings } from 'lucide-react'

const FeaturedListings = () => {

  const cars = [
    {
      id: 1,
      title: 'Toyota RAV4',
      subtitle: 'The smart choice for comfort, safety, and performance',
      specs: '2.0L Petrol / Automatic',
      mileage: '45,000 km',
      drive: 'All-Wheel Drive (AWD)',
      year: '2019',
      location: 'San Fernando',
      price: '$180,000',
    },
    {
      id: 2,
      title: 'Toyota RAV4',
      subtitle: 'The smart choice for comfort, safety, and performance',
      specs: '2.0L Petrol / Automatic',
      mileage: '45,000 km',
      drive: 'All-Wheel Drive (AWD)',
      year: '2019',
      location: 'San Fernando',
      price: '$180,000',
    },
    {
      id: 3,
      title: 'Toyota RAV4',
      subtitle: 'The smart choice for comfort, safety, and performance',
      specs: '2.0L Petrol / Automatic',
      mileage: '45,000 km',
      drive: 'All-Wheel Drive (AWD)',
      year: '2019',
      location: 'San Fernando',
      price: '$180,000',
    },
    {
      id: 4,
      title: 'Toyota RAV4',
      subtitle: 'The smart choice for comfort, safety, and performance',
      specs: '2.0L Petrol / Automatic',
      mileage: '45,000 km',
      drive: 'All-Wheel Drive (AWD)',
      year: '2019',
      location: 'San Fernando',
      price: '$180,000',
    },
    {
      id: 5,
      title: 'Toyota RAV4',
      subtitle: 'The smart choice for comfort, safety, and performance',
      specs: '2.0L Petrol / Automatic',
      mileage: '45,000 km',
      drive: 'All-Wheel Drive (AWD)',
      year: '2019',
      location: 'San Fernando',
      price: '$180,000',
    },
    {
      id: 6,
      title: 'Toyota RAV4',
      subtitle: 'The smart choice for comfort, safety, and performance',
      specs: '2.0L Petrol / Automatic',
      mileage: '45,000 km',
      drive: 'All-Wheel Drive (AWD)',
      year: '2019',
      location: 'San Fernando',
      price: '$180,000',
    },
  ]

  return (
    <section className='w-full bg-white py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto flex flex-col gap-10'>
      
        <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight'>
          Featured Listings
        </h2>

   
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cars.map((car, index) => (
            <div 
              key={index} 
              className='bg-white rounded-2xl p-5  shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4'
            >
           
              <div className='relative w-full h-44  rounded-xl overflow-hidden flex items-center justify-center'>
                <Image 
                  src='/cars.png'
                  alt={car.title}
                  fill
                  className='object-contain p-2'
                />
              </div>

       
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-bold text-gray-900 text-base'>{car.title}</h3>
                  <span className='text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md'>
                    {car.year}
                  </span>
                </div>
                <p className='text-xs text-gray-500 line-clamp-1'>{car.subtitle}</p>
              </div>

              <div className='flex flex-col gap-1.5 text-xs text-gray-600 border-y border-gray-100 py-3'>
                <div className='flex items-center gap-2'>
                  <Settings size={13} className='text-blue-600' />
                  <span>{car.specs}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Gauge size={13} className='text-blue-600' />
                  <span>{car.mileage}</span>
                </div>
              </div>

              <div className='flex items-center justify-between pt-1'>
                <span className='text-xs text-gray-400 font-medium'>{car.location}</span>
                <span className='font-bold text-blue-600 text-base'>{car.price}</span>
              </div>
            </div>
          ))}
        </div>

      
        <div className='bg-white border border-gray-200/80 rounded-2xl p-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs mt-4'>
          <p className='text-lg md:text-base font-bold text-black tracking-tight'>
            All cars on one platform — <span className='text-black font-bold'>simple and reliable</span>
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-xl transition-colors shadow-sm'>
            Explore More Cars
          </button>
        </div>

      </div>
    </section>
  )
}

export default FeaturedListings