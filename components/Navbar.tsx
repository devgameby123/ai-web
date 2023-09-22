import Link from 'next/link'
import React from 'react'
import "./navbar.css"
import Image from 'next/image'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='navbar'>
        <div className='box'>
          <Image src={"/Logo.png"} width={50} height={50} alt='Logo'/>
          <span>บริษัท เพื่อน มี จำกัด</span>
        </div>
        <ul>
            
            <Link className='link' href={"#Movie"}>Home</Link>
            <span> | </span>
            <Link className='link' href={"/"}>MOVIE</Link>
            <span> | </span>
            <Link className='link' href={"/"}>CARTOON</Link>
            <span> | </span>
            <Link className='link' href={"/"}>SERIES</Link>
            <span> | </span>
            <Link className='link' href={"/"}>ANIME</Link>
        </ul>
        <div>
            <p>EN</p>
        </div>
    </nav>
  )
}

export default Navbar