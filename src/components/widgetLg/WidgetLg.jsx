import React from 'react'
import "./widgetLg.css"

function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={" widgetLgButton " + type} >{type}</button>
  }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle"> Latest Transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://static.independent.co.uk/2022/04/26/21/Russia_Putin_45672.jpg?width=1200" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Vladimir Putin</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$221,000</td>
            <td className="widgetLgStatus"><Button type="approved"/></td>
          </tr>
          {/* section-2 */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://static.independent.co.uk/2022/04/26/21/Russia_Putin_45672.jpg?width=1200" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$221,000</td>
            <td className="widgetLgStatus"><Button type="declined"/></td>
          </tr>
          {/* section-3 */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://static.independent.co.uk/2022/04/26/21/Russia_Putin_45672.jpg?width=1200" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$221,000</td>
            <td className="widgetLgStatus"><Button type="pending"/></td>
          </tr>
          {/* section-4 */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://static.independent.co.uk/2022/04/26/21/Russia_Putin_45672.jpg?width=1200" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$221,000</td>
            <td className="widgetLgStatus"><Button type="approved"/></td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg
