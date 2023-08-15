import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import './Header.css'
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img 
         src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
         alt="" />
        <div className="header_search">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Job" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
         <HeaderOption Icon={NotificationIcon} title="Notifications" />
         <HeaderOption avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title={"profile"} />
      </div>
    </div>
  )
}

export default Header
