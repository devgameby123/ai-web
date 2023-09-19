import React from 'react'
import Button from '../../../components/Button'

type Props = {}

function page({}: Props) {
  return (
    <>
      <Button className='btnNext'>Hello</Button>
      <Button className='btnAddFavour1'>Add to Favourite</Button>
      <button className='btnAddFavour2'><span>Add to Favourite</span></button>

    </>
    
  )
}

export default page
