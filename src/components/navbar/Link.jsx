import React from 'react'
import { Link } from "react-router-dom";

const NavLink = ({text, path, handleClick}) => {
  return (
    <Link to={path} className='font-bold 
                                text-xl
                                block 
                                m-2 
                                text-white
                                hover:text-gray-200 
                                transition-all 
                                duration-500 
                                cursor-pointer'>
                                    {text}
    </Link>
  )
}

export default NavLink