import React from 'react'
import Button from '../../../components/Button'
import Tagbar from '../../../components/Tagbar'


type Props = {}

function page({}: Props) {
  return (
    <>
      <Button className='btnNext icon'>next</Button>
      <Button className='btnAdd1'>Add to Favourite</Button>
      <button className='btnAdd2'><span>Add to Favourite</span></button>
      <Tagbar className='name'>Name1</Tagbar>
    </>
    
  )
}

export default page
