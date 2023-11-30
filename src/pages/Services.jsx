import React from 'react'
import { services } from '../assets/data/services'
import ServicesCard from '../components/Services/ServicesCard'

function Services() {
  return (
    <div className='container'>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ">
      {services.map((item, index) => (
        <ServicesCard item={item} index={index} key={index} />
      ))}
    </div>
    </div>
  )
}

export default Services