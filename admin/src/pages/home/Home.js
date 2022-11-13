import React from 'react'
import Charts from '../../components/charts/Charts'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import "./home.scss"


const Home = () => {



  return (
    <div className='home'><Sidebar/>
    <div className='homeContainer'><Navbar/>

    <div className='widgets'>
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earnings"/>
      <Widget type="balance"/>
    </div>
    <div className='charts'>
      <Featured/>
      <Charts title="Last 6 Months (Revenue)" aspect={2/1}/>
    </div>
    <div className='listContainer'>
      <div className='listTitle'>
        Last Transactions
      </div>
      <Table/>
    </div>
    </div>
    </div>
  )
}

export default Home
