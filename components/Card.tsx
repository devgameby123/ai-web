import Image from "next/image"
import "./card.css"
import React from 'react'

type Props = {
    w?:number,
    h?:number,
    image:string;
}

const Card = ({w = 350,h = 350,image}:Props) => {
  return (
    <>
    <div className="container-card1">
        <div className="container-image1">
        <Image objectFit="cover" className="image" src={image} width={w} height={h} alt="Image in Card"/>
        </div>
        <p>The Little Mermaid</p>
    </div>
    
    </>
    
  )
}

export default Card