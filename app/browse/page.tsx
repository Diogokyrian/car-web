import React from 'react'
import Navbar from '@/components/Navbar'
import CtaFooter from '@/components/CtaFooter'
import Link from 'next/link'


const browseCars = [
  { id: 1, name: 'Toyota RAV4', year: '2019', location: 'San Fernando', price: '$180,000', tag: null },
  { id: 2, name: 'Honda Civic', year: '2020', location: 'San Fernando', price: '$150,000', tag: 'DEALER' },
  { id: 3, name: 'Nissan Altima', year: '2019', location: 'San Fernando', price: '$120,000', tag: null },
  { id: 4, name: 'BMW 3 Series', year: '2019', location: 'San Fernando', price: '$220,000', tag: null },
  { id: 5, name: 'Mercedes-Benz C-Class', year: '2021', location: 'Port of Spain', price: '$280,000', tag: 'DEALER' },
  { id: 6, name: 'Hyundai Elantra', year: '2020', location: 'Chaguanas', price: '$110,000', tag: null },
  { id: 7, name: 'Kia Sportage', year: '2022', location: 'San Fernando', price: '$195,000', tag: null },
  { id: 8, name: 'Mazda CX-5', year: '2020', location: 'Arima', price: '$175,000', tag: 'DEALER' },
]

const trendingTags = [
  'SUVs under $200k',
  'Used Sedans',
  'Electric Cars',
  'Sports Cars',
  'Family Vans',
  'Luxury Brands',
  'Convertibles',
  'Trucks',
  'Hybrids'
]

export default function BrowseCarsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-4">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Browse Cars</h1>
          <p className="text-gray-500 text-sm mt-1">Explore hundreds of used and new cars for sale</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Make</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-blue-600">
                <option>Make</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Nissan</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Model</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-blue-600">
                <option>Model</option>
                <option>RAV4</option>
                <option>Civic</option>
                <option>Altima</option>
                <option>3 Series</option>
                <option>C-Class</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Min Price</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-blue-600">
                <option>Min Price</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Region</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-blue-600">
                <option>Region</option>
                <option>San Fernando</option>
                <option>Port of Spain</option>
                <option>Chaguanas</option>
                <option>Arima</option>
              </select>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg text-sm transition-colors shadow-sm">
              Search
            </button>
          </div>
        </div>
      </section>

   
      <section className="max-w-7xl mx-auto py-6 px-6 md:px-16">
        <h3 className="text-sm font-bold text-gray-900 mb-4">Trending Searches</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag, idx) => (
            <button 
              key={idx}
              className="bg-blue-100 hover:bg-gray-100 border border-gray-200 text-blue-600 text-xs px-3.5 py-1.5 rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

   
      <section className="max-w-7xl mx-auto py-6 px-6 md:px-16 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">All Listings</h2>
          <span className="text-xs text-gray-500 font-medium">Showing {browseCars.length} results</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {browseCars.map((car) => (
            <div key={car.id} className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 relative shadow-sm hover:shadow-md transition-shadow">
              {car.tag && (
                <span className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full z-10">
                  {car.tag}
                </span>
              )}
              <div className="w-full h-40  rounded-xl flex items-center justify-center text-gray-400 text-xs font-medium">
                <img src="/cars.png" alt={car.name} className="object-contain w-full h-full p-2" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{car.name}</h4>
                <p className="text-[11px] text-gray-400">{car.year}</p>
                <p className="text-[11px] text-gray-400">{car.location}</p>
              </div>
              <div className="font-extrabold text-blue-600 text-base">
                {car.price}
              </div>
              <button className="w-full mt-1 border border-gray-200 hover:border-gray-300 text-gray-600 text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5">
                <span className="text-gray-400">+</span> Add to Compare
              </button>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
    </main>
  )
}
    