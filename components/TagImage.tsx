import React from 'react'
import './button.css'
import Image from 'next/image';

type Props = {
  className : string
  , children ?: string,
  image:string,
  w:number,
  h:number,
  marginL:number;
}
function TagImage({className, children,image,w,h,marginL}: Props) { 
  return (
    <div className='container-iconTagbar'>
        <Image  src={image} width={w} height={h} alt='asdasd'/>
        <button style={{ margin: `0 ${marginL}px`, }} className={className}>{children}</button>
    </div>
   
  )
}

export default TagImage