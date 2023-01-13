import React from 'react'
import "./newUser.css"

function NewUser() {
  return (
    <div className='newUser'>
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label >Username</label>
              <input type="text" placeholder='Makarov' />
            </div>
            <div className="newUserItem">
              <label >Full Name</label>
              <input type="text" placeholder='Mikhail Makarov' />
            </div>
            <div className="newUserItem">
              <label >Email</label>
              <input type="email" placeholder='makarov678@gmail.com' />
            </div>
            <div className="newUserItem">
              <label >Password</label>
              <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
              <label >Phone</label>
              <input type="text" placeholder='+7 123-456-7890' />
            </div>
            <div className="newUserItem">
              <label >Address</label>
              <input type="text" placeholder='Moscow | Russia' />
            </div>
            <div className="newUserItem">
                <label >Gender</label>
                <div className="newUserGender">
              <input type="radio" name = "gender" id = "male" value="male" />
              <label for="Male">Male</label>
              <input type="radio" name = "gender" id = "female" value="female" />
              <label for="Female">Female</label>
              </div>
            </div>
            
                <div className="newUserItem">
                  <label >Active</label>
                  <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
               
                <button className="newUserButton">Create</button>
          </form>
         
    </div>
  )
}

export default NewUser
