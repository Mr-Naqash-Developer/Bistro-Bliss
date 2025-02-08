import React from 'react'
import { NavLinks } from '../..'
import Logo from '../assets/Logo.png'
import Button from './Button'
import { EllipsisVertical } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='px-[10px] sm:px-[30px] py-[6px] sm:py-[15px] flex justify-between items-center '>
      <img src={Logo} alt="resturant" className='w-[150px] cursor-pointer ' />
      <ul className='hidden md:flex gap-3 lg:gap-10'>
        {NavLinks.map((link) => (
          <li key={link.id} className='text-secondary hover:bg-hoverBg px-3 py-[4px] rounded-full cursor-pointer transition-all duration-300  '>{link.name}</li>
        ))}
      </ul>
      <div className='hidden md:block'>
        <Button txtColor="#182226" hoverTxtColor="#ffffff" brColor="#182226" hoverBrColor="#AD343E" bgColor="#ffffff" hoverBgColor="#AD343E" />
      </div>
      <div className='block md:hidden active:bg-hoverBg rounded-full p-2'>
        <EllipsisVertical />
      </div>
    </nav>
  )
}

export default Navbar
