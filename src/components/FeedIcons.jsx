import React from 'react'
import './FeedIcons.css'
function FeedIcons({Icon, title, color}) {
  return (
    <div className='feed__icons'>
      {Icon && <Icon className='Feed_icon' style={{color:color}}/>}
      <h4 className='f__title'>{title}</h4>
      
    </div>
  )
}

export default FeedIcons
