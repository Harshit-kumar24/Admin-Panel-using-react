import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({title,data,dataKey,grid}) {
   

  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width = "100%" aspect = {4/1}>
        <LineChart data={data}>
            <XAxis dataKey = "name" stroke='white'/>
            <YAxis/>
            <Line type="monotone" dataKey={dataKey} stroke='darkred'/>
          { grid && <CartesianGrid strokeDasharray="3 3" stroke='grey' />}
            <Tooltip/>
        </LineChart>
        
      </ResponsiveContainer>
    </div>
  )
}


export default Chart
