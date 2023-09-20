import React from 'react'
import './button.css'


type Props = {
  className : string
  , children : string
}

function Tagbar({className, children }: Props) {
  return (
    <Tagbar className={className}>{children}</Tagbar>
  )
}

export default Tagbar

