import React from 'react'
import Button from '../../../components/Button'

type Props = {}

function page({}: Props) {
  return (
    <>
      <Button className='primary'>Hello</Button>
      <Button className='red'>Hello</Button>
    </>
    
  )
}

export default page