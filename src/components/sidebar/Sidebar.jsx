import React from 'react'
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp,PermIdentity,Store,CurrencyExchange,BarChart,Email,RateReview,Chat,WorkOutline,ErrorOutline
} from "@mui/icons-material"
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to="/" className='link'>
                <li className="sidebarListItem active" >
                    <LineStyle className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <li className="sidebarListItem">
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className='sidebarIcon'/>
                    Inflation
                </li>
            </ul>
        </div>
        {/* section-2 */}
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">QuickMenu</h3>
            <ul className="sidebarList">
            <Link to = "/users" className='link'>
                <li className="sidebarListItem" >
                    <PermIdentity className='sidebarIcon'/>
                    Users
                </li>
                </Link>
                <Link to=  "/products" className='link'>
                <li className="sidebarListItem">
                    <Store className='sidebarIcon'/>
                    Products
                </li>
                </Link>
                <li className="sidebarListItem">
                    <CurrencyExchange className='sidebarIcon'/>
                    Transaction
                </li>
                <li className="sidebarListItem">
                    <BarChart className='sidebarIcon'/>
                    Report
                </li>
            </ul>
        </div>
        {/* section-3 */}
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem " >
                    <Email className='sidebarIcon'/>
                    Mail
                </li>
                <li className="sidebarListItem">
                    <RateReview className='sidebarIcon'/>
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    Message
                </li>
            </ul>
        </div>
        {/* section-4 */}
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem" >
                    <WorkOutline className='sidebarIcon'/>
                    Manage
                </li>
                <li className="sidebarListItem">
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <ErrorOutline className='sidebarIcon'/>
                    Report
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}


export default Sidebar
