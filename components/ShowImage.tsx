import React from 'react'
import './button.css'
import Image from 'next/image';

type Props = {
  className : string
  , children ?: string,
  image:string,
  w:number,
  h:number;
}
function ShowImage({className, children,image,w,h }: Props) { 
  return (
    <div className=''>
        <Image  src={image} width={w} height={h} alt='asdasd'/>
        <button style={{margin: `0 px`}} className={className}>{children}</button>
    </div>
   
  )
}

export default ShowImage