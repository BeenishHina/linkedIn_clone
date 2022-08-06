import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HouseIcon from '@mui/icons-material/House';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img src="./linkedin-logo.png" alt="linkedin" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder='search'/>
                </div>
            </div>

            <div className="header__right">
                     <HeaderOptions title='Home' Icon={HouseIcon}/>
                     <HeaderOptions title='My Network' Icon={SupervisorAccountIcon}/>
                     <HeaderOptions title='Jobs' Icon={BusinessCenterIcon}/>
                     <HeaderOptions title='Messaging' Icon={ChatIcon}/>
                     <HeaderOptions title='Notifications' Icon={NotificationsIcon}/>
                     <HeaderOptions title='Me' avatar='./dp.png'/>
                     {/* <HeaderOptions title='Home'/>
                     <HeaderOptions title='Home'/>
                     <HeaderOptions title='Home'/> */}
            </div>
        </div>
    )
}

export default Header
