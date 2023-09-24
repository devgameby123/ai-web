import Image from 'next/image'
import React from 'react'


import "./info.css"
import Card from '../../../components/Card3'
import Tagbar from '../../../components/Tagbar'
import Button from '../../../components/Button'
import PieChart from '../../../components/Chart/PieChart'
import Card2 from '../../../components/Card2'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container'>
      <div className='back-image'>
        <Image style={{filter: "blur(3px) brightness(70%)",}} src={"/image2.jpg"} width={1980} height={1080} alt='Background'/>
      </div>
      <div className='card-single'>
        <Card  w={315} h={426} image='/Card/co1.jpg'/>
        <p>Free Guy</p>
        <Button  className='btnAdd2 btn'>Add to Fovourite</Button>
      </div>
      <div className='Chart'>
        <PieChart width={200} height={200}/>
        <div className='info-content'>
            <div className='tag'>
              <Tagbar className='tagCategory back-color-white'>Action</Tagbar>
              <Tagbar className='tagCategory back-color-white'>Drama</Tagbar>
              <Tagbar className='tagCategory back-color-white'>Scient Fiction</Tagbar>
              <Tagbar className='tagCategory back-color-white'>Adventure</Tagbar>
            </div>
            <div>
              <p className='text-info'>Ryan Reynolds as Guy / Blue Shirt Guy, a bank teller and non-player character (NPC) in Free City who is initially unaware that he is a video game character.</p>
            </div>
            <div>
              <p className='text-info'>Distributed by                   : 20th Century Studios, Walt Disney Studios Motion Pictures</p>
              <p className='text-info'>Director                              : Shawn Levy</p>
              <p className='text-info'>Cinematography             : George Richmond</p>
              <p className='text-info'>Music by                             : Christophe Beck</p>
              <p className='text-info'>Production companies   : Berlanti Productions; 21 Laps Entertainment; Maximum Effort</p>
              <p className='text-info'>Lit Entertainment Group : TSG Entertainment;</p>
            </div>
        </div>
      </div>
      <div className='Container-Card'>
        <p className='text-head'>You may also like</p>
        <div className='Card-content'>
          <Card2 classNameCTN="container-card2" classNameC="container-image2" w={266} h={344} image='/Card/co4.jpeg'/>
          <Card2 classNameCTN="container-card2" classNameC="container-image2" w={266} h={344} image='/Card/co4.jpeg'/>
          <Card2 classNameCTN="container-card2" classNameC="container-image2" w={266} h={344} image='/Card/co4.jpeg'/>
          <Card2 classNameCTN="container-card2" classNameC="container-image2" w={266} h={344} image='/Card/co4.jpeg'/>
        </div>
      </div>
      
    </div>
  )
}

export default page