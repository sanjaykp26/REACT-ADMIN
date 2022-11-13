import React, { useState } from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColoums,userRows } from '../../datatablesouce';
import { Link } from 'react-router-dom';
const Datatable = () => {
  const [data,setData]=useState(userRows)
   const  handleDelete =(id)=>{
    setData(data.filter(item=>item.id !== id))

   }
  const actionColoum=[{field:"action",headerName:"Action",width:200,renderCell:(params)=>{
    return(
      <div className='cellAction'>
       <Link to="/users/test"> <div className='viewButton'>view</div></Link>
        <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
      </div>
    )
  }}]
  return (
    <div className='Datatable'>
<div className='datatableTitle'>
  Add New user
  <Link to="/users/new" className='link'>Add New</Link>
</div>
      <DataGrid className='datagrid'
        rows={data}
        columns={userColoums.concat(actionColoum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    
    </div>
  )
}

export default Datatable