import React from 'react'
import Button from '../../../components/Button'
import Tagbar from '../../../components/Tagbar'
import ButtonImage from '../../../components/ButtonImage'
import TagImage from '../../../components/TagImage'
import ShowImage from '../../../components/ShowImage'

type Props = {}

function page({}: Props) {
  return (
    <>
      <button className='btnNext'><span></span></button>
      <button className='btnViewAll'><span>View all</span></button>
      <Button className='btnSignInHome'>SIGN IN</Button>
      <Button className='btnSignIn'>SIGN IN</Button>
      <Button className='btnLogin'>LOG IN</Button>
      <Button className='btnAdd1'>+ Add to Favourite</Button>
      <button className='btnAdd2'><span>Add to Favourite</span></button>
      <Tagbar className='tagHD'>HD</Tagbar>
      <Tagbar className='tagSeason'>Season 1</Tagbar>
      <Tagbar className='tagCategory'>Action</Tagbar>
      <TagImage image='/star.png' className='tagRating' w={15} h={15} marginL={5}>8.5</TagImage>
      <TagImage image='/calendar.png' className='tagDate' w={20} h={15} marginL={5}>2022</TagImage>
      <TagImage image='/time.png' className='tagRating' w={20} h={15} marginL={5}>2:10:00</TagImage>
      <ButtonImage image='/time.png' className='time2' w={20} h={5} gap={5}>2:10:00</ButtonImage>
      <Tagbar className='tagTime'>2:10:00</Tagbar>
      <ShowImage image='/bad.png' className='time2' w={50} h={0}></ShowImage>
      <ShowImage image='/good.png' className='time2' w={50} h={0}></ShowImage>
    </>
  )
}

export default page