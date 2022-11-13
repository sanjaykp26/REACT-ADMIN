import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./single.scss"
import Charts from '../../components/charts/Charts'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div className='Single'>
    <Sidebar/>
    <div className='singleContainer'>
      <Navbar/>
      <div className='top'>
        <div className='left'>
          <div className='editButton'>edit</div>
          <h1 className='title'> Information</h1>
          <div className='item'>
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt='' className='itemImg'>
            </img>
            <div className='details'>
              <h1 className='itemTitle'>Jane Doe</h1>
              <div className='detailItem'>
                <span className='itemKey'>Email:</span>
                <span className='itemValue'>Janedoe@gamil.com</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Phone:</span>
                <span className='itemValue'>987678909</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Address:</span>
                <span className='itemValue'>Elton st.234 Garden yd.NewYork</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey'>Country:</span>
                <span className='itemValue'>USA</span>
              </div>
            </div>
            </div>
        </div>
        <div className='right'>
          <Charts aspect={3/1} title="User Spending (Last 6 Months)"/>
        </div>
      </div>
      <div className='bottom'>
      <h1 className='title'> Last Transactions  </h1>
        <List/>
      </div>
    </div>
    </div>
  )
}

export default Single