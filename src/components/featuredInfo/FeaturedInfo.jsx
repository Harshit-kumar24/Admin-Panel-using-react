import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">GDP</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$22,434</span>
                <span className="featuredMoneyRate">
                -11.4<ArrowDownward  className = "featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* Section-2 */}
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$22,434</span>
                <span className="featuredMoneyRate">
                -11.4<ArrowDownward className = "featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* Section-3 */}
        <div className="featuredItem">
            <span className="featuredTitle">Inflation</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$22,434</span>
                <span className="featuredMoneyRate">
                -11.4<ArrowUpward  className = "featuredIcon positive"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo
