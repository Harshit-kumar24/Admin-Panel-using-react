import "./userList.css"
import  React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import {userRows} from "../../../dummyData"
import { Link } from "react-router-dom";



function UserList() {
    const [data,setData] = useState(userRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    };


const columns = [
    { field: 'id', headerName: 'ID', width: 150,  cellClassName:'userListCol' },
    { field: 'user', headerName: 'User', width: 300 ,renderCell:(params)=>{
        return(
            <div  className="userListUser">
                <img className="userListImage" src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'email', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width:200,
    },
    {
        field:"action",
        headerName:"Action",
        width:300,
        renderCell:(params)=>{
            return(
                <>
                <Link to = {"/users/"+params.row.id}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className="userListDelete" onClick = {()=>handleDelete(params.row.id)} />
                </>
            )
        }
    }
  ];
  
  return (
    <div className='userList'>
           <DataGrid sx={{color:"white"}}
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={14}
        rowsPerPageOptions={[5]}
        checkboxSelection  
      />
    </div>
  )
}

export default UserList
