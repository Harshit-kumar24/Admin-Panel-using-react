import React from 'react'
import "./Topbar.css"
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
        <Link to="/" className='link'>
            <div className="topLeft">
                <div className="logoImg">
                  <img class = "logoImage" src="NicePng_soviet-union-png_1625249.png" alt="" />
                </div>
                <div className="logoText">
                <span className="logo">U.S.S.R</span>
                <span className="textUnder">IMAGING DATABASE</span>
                </div>
            </div>
            </Link>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone fontSize = "large"/>
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Link to = "/map" className='link'>
                <Language fontSize = "large"/>
                </Link>
                </div>
                <div className="topbarIconContainer">
                <Settings fontSize = "large"/>
                </div>
                <Link to = "/profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNEHkQ0EGnMaN5OAl_W1jJhL8h-OLmZ2RDQ&usqp=CAU" alt="" className="topAvatar"/>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default Topbar
