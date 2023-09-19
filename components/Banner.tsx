import Image from 'next/image'
import React from 'react'
import "./banner.css"
type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='Banner'>
         <Image className='image' layout='fil' src={"/image2.jpg"} height={50} width={500} alt='Image'/>
    </div>
  )
}

export default Banner