import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@mui/icons-material'

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="data:image/jpeg;base64,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" alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Vladimir Lenin</span>
                    <span className="widgetSmUserTitle">Chairman of Soviet Union</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE_m3HHk1n1L_9sEpIW5URDl8miN4Qixf0A&usqp=CAU" alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Joseph Stalin</span>
                    <span className="widgetSmUserTitle">Chairman of Soviet Union</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="data:image/jpeg;base64,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" alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Georgy Malenkov </span>
                    <span className="widgetSmUserTitle">Chairman of Soviet Union</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="data:image/jpeg;base64,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" alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Nikita Khrushchev </span>
                    <span className="widgetSmUserTitle">Chairman of Soviet Union</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="data:image/jpeg;base64,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" alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Leonid Brezhnev </span>
                    <span className="widgetSmUserTitle">Chairman of Soviet Union</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm
