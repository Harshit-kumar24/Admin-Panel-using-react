import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import "./user.css"
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className='userTitle'>Edit User</h1>
        <Link to = "/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
        <div className="userContainer">
            <div className="userShow"> 
                <div className="userShowTop">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJl9eKi2yryVLD8wQ0eh3xA7i7IpejKqiSCw&usqp=CAU" alt="" className="userShowImage" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Vladimir Putin</span>
                        <span className="userShowUserTitle">President of Russia</span>
                    </div>
                </div>
                <div className="userShowBottom"></div>
                <span className="userShowTitle">
                    Account Details
                    </span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">Vladimir_putin_456</span>
                </div>
                {/* section-2 */}
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">7 Oct 1952</span>
                </div>
                {/* section-3 */}
                <span className="userShowTitle">
                    Contact Details
                    </span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+7 693-235-7532</span>
                </div>
                {/* section-4 */}
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">putin@gmail.com</span>
                </div>
                {/* section-5 */}
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">Дворец Путина</span>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit Information</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='Annabeck' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Anna Becker' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder='annabeck345@gmail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+12 123-456-7890' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='NewYork | USA' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJl9eKi2yryVLD8wQ0eh3xA7i7IpejKqiSCw&usqp=CAU" alt="" className="userUpdateImg" />
                            <label htmlFor="file">
                                <Publish className='userUpdateIcon'/>
                            </label>
                            <input type="file" id='file' style = {{display:"none"}} />
                        </div>
                        <button className="userUpdateButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User
