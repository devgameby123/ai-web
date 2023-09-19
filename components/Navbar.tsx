import Link from 'next/link'
import React from 'react'
import "./navbar.css"

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='navbar'>
        <div className='box'>บริษัท เพื่อน มี จำกัด</div>
        <ul>
            <Link className='link' href={"/"}>Home</Link>
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