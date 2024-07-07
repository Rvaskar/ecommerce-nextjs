import Image from 'next/image'
import React,{NavLink} from 'react'
import imageurl from '/logo.png'
import Link from 'next/link'
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row md:justify-start justify-center items-center py-3 shadow'>
        <div className='logo mx-4'>
       <Link href={'/'}> <Image src={imageurl} alt="CodeThreads.com" width={200} height={40} /></Link>
        </div>
        <div className='nav md:ml-16'>
          <ul className='flex space-x-1 md:space-x-4 font-semibold md:font-bold  md:text-md'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/tshirt'}>Tshirt</Link>
            </li>
            <li>
              <Link href={'/hoodies'}>Hoodies</Link>
            </li>
            <li>
              <Link href={'/'}>Stickers</Link>
            </li>
            <li>
              <Link href={'/mugs'}>Mugs</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
          </ul>
        </div>
        <div className='cart absolute right-0 top-2 mx-5'>
          <TiShoppingCart className='text-xl md:text-3xl' />
        </div>      
    </nav>
  )
}

export default Navbar
