import React from 'react'
import './Tags.css'

export const TagList = ({tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
        
    </div>
  )
}
