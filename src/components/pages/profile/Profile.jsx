import React from 'react'
import "./profile.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { userStats } from '../../../dummyData';

function Profile() {

  return (
    <div className='profile'>
      <div className="profileContainer">
      <h1 className='profileTitle'>User Profile</h1>
        <div className="profileTop">
            <div className="profileTopLeft">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNEHkQ0EGnMaN5OAl_W1jJhL8h-OLmZ2RDQ&usqp=CAU" alt="" className="profileImage" />
            </div>
            <div className="profileTopMiddle">
                <div className="profileItem">
                    <span className="userInfoTitle">Name</span>
                    <span className="userInfo">Vladimir Putin</span>
                </div>

                <div className="profileItem">
                    <span className="userInfoTitle">Position</span>
                    <span className="userInfo">President of Russia</span>
                </div>

                <div className="profileItem">
                    <span className="userInfoTitle">Title</span>
                    <span className="userInfo">Merchant of Death</span>
                </div>

                <div className="profileItem">
                    <span className="userInfoTitle">Email</span>
                    <span className="userInfo">putin@gmail.com</span>
                </div>

                <div className="profileItem">
                    <span className="userInfoTitle">Net Worth</span>
                    <span className="userInfo">$34,564,465</span>
                </div>

                <div className="profileItem">
                    <span className="userInfoTitle">Status</span>
                    <span className="userInfo">Active</span>
                </div>
            </div>
            <div className="profileTopRight">
                
                <h1 className='userMedalListTitle'>Medals</h1>
                <ul className="userMedalList">
                    <li className="userMedal">🎖️  Medal Of Bravery</li>
                    <li className="userMedal">🎖️  Medal Of Intelligence</li>
                    <li className="userMedal">🎖️  Medal Of Strategic Working</li>
                    <li className="userMedal">🎖️  Medal Of Behaviour</li>
                    <li className="userMedal">🎖️  Medal Of Honesty</li>
                    <li className="userMedal">🎖️  Medal Of Teamwork</li>
                </ul>
            </div>
        </div>
        <div className="profileBottom">
                <div className="profileBottomLeft">
                <h3 className="userStatsTitle">User Stats</h3>
                <RadarChart className='userRadarChart'
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={userStats}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>        
                </div>
                <div className="profileBottomRight">
                <h1>Work contributed</h1>
                        
                            <p className='userInfoDetails'>Days before he was elected to the Russian presidency in 2000, Vladimir Putin told the BBC that Russia was “part of European culture” and that he “would not rule out” the possibility of it joining Nato.

“I cannot imagine my own country in isolation from Europe and what we often call the civilised world,” said Putin, who was still acting president after Boris Yeltsin’s sudden resignation on New Year’s Eve 1999.

A generation later, as Putin marks the 15th anniversary of acceding to power on 7 May 2000, Russia has changed beyond all recognition from the chaotic, open free-for-all it was under Yeltsin. Internationally it faces isolation, sanctions, a new cold war even. At home, despite economic decline Putin enjoys perhaps the highest popularity rating of any Kremlin leader – an approval rating that topped 86% in February.

Love him or hate him, it’s hard to deny that Putin has made a huge impact on his country and the world.
Ukraine, Georgia and the ‘near abroad’
The “near abroad” just got a little nearer. The Ukrainian conflict has ruptured relations between Russia and the west over the past year, but in fact it is merely the latest example of Putin asserting Russia’s “rights” in its former backyard, known in Russia as “the near abroad”. Those who were surprised by Putin’s annexation of Crimea and the subsequent Russian-fuelled conflict in eastern Ukraine should have remembered: six years earlier he set the mould for the “Putin doctrine” in Georgia. Russia would use troops to protect its interests in a sphere of influence increasingly hemmed in by Nato’s advance. The US blinked first.</p>
                        
                </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
