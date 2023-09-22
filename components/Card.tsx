import Image from "next/image"
import "./card.css"
import React from 'react'
import Link from "next/link"

type Props = {
    link?:string,
    classNameCTN?:string,
    classNameC?:string,
    w?:number,
    h?:number,
    image:string;
}

const Card = ({classNameCTN,classNameC,w = 350,h = 350,image,link="/"}:Props) => {
  return (
    <Link className="Card" href={link}>
        <div className={classNameCTN}>
            <div className={classNameC}>
            <Image className="image" src={image} width={w} height={h} alt="Image in Card"/>
            </div>
            <p>The Little Mermaid</p>
        </div>
    </Link>
  )
}

export default Card