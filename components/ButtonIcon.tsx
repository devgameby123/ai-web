import React from 'react'
import './button.css'
import Image from 'next/image';
type Props = {
    className : string
    , children ?: string,
    image:string,
    w:number,
    h:number,
    gap:number;
  }
  function ButtonIcon({className, children,image,w,h,gap }: Props) { 
    return (
      <div className='container-icon'>
          <Image  src={image} width={w} height={h} alt='asdasd'/>
          <button style={{margin: `0 ${gap}px`,}} className={className}>{children}</button>
      </div>
     
    )
  }
  
  export default ButtonIcon