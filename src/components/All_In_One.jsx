import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'

function All_In_One() {
  return (
    <div>
      <Header/>
      <div style={{display: 'flex', backgroundColor: '#f3f2ef'}}>
      <Sidebar/>
      <Feed/>
      </div>
    </div>
  )
}

export default All_In_One
