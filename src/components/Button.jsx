import React, { useState } from 'react'

const Button = ({ txtColor, hoverTxtColor, brColor, hoverBgColor, bgColor, hoverBrColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
    style={{
      color: isHovered ? hoverTxtColor : txtColor,
      backgroundColor: isHovered ? hoverBgColor : bgColor,
      borderColor: isHovered ? hoverBrColor : brColor
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className='border-2  px-3 py-[6px] lg:px-4 lg:py-2 rounded-full font-semibold text-[16px] transition-all duration-300 '>
      Book A Table
    </button>
  )
}

export default Button
