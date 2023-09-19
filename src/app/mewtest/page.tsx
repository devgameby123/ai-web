import React from 'react'
import Button from '../../../components/Button'


type Props = {}

function page({}: Props) {
  return (
    <>
      <Button className='btnNext icon'> </Button>
      <Button className='btnAdd1'>Add to Favourite</Button>
      <button className='btnAdd2'><span>Add to Favourite</span></button>
      <Button className='btnCategory'>Fantacy</Button>
    </>
    
  )
}

export default page
