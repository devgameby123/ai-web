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
            
            <Link className='link' href={"/"}>Home</Link>
            <span> | </span>
            <Link className='link' href={"/#COMEDY"}>MOVIE</Link>
            <span> | </span>
            <Link className='link' href={"/#ANIME"}>CARTOON</Link>
            <span> | </span>
            <Link className='link' href={"/#SERIES"}>SERIES</Link>
        </ul>
        <div>
            <p>EN</p>
        </div>
    </nav>
  )
}

export default Navbar