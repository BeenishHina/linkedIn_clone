import React from 'react'
import './Sidebar.css'
import { Avatar } from "@mui/material";
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddIcon from '@mui/icons-material/Add';
function Sidebar() {
  return (
    <div className='sidebar' >

<div className="sectionA">

        <div className="sidebar_top">
          <img src="./bg.png" alt="" />
          <Avatar className='sidebar_avatar' src='./dp.png' />

          <h2>Beenish Hina</h2>
          <p className='work'>Student at Comsats university Attock campus</p>
        </div>


        <hr />
      <a href="">
        <div className='center'>
          <span className='span_A'>Connections</span>
          <span className='span_B'>Grow your network</span>
        </div>
        <img src="./con_img.png" alt="" />
        </a>

        <hr />
        <div className='access'>
          <p className='tools'>Access exclusive tools & insights</p>
          <p className='premium'><SquareRoundedIcon className='iconss'/>Try Premium for free</p>
          </div>
          <hr />
          <p className='items'><TurnedInIcon className='icons'/> My items</p>
        
      </div>
      <div className="sidebar_stats">
        <p>Groups</p>
        <p className='add'>Events<AddIcon className='addIcon' /> </p>
        <p>Followed Hashtags</p>
        <hr />
        <h4>Discover more</h4>

      </div>
    </div>
  )
}

export default Sidebar
