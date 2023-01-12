import "./productList.css"
import  React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import {productRows} from "../../../dummyData"
import { Link } from "react-router-dom";

function ProductList() {
    const[data,setData] = useState(productRows)

    const handleDelete = (id) =>{
        setData(data.filter((item)=>item.id!==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 150,  cellClassName:'userListCol' },
        { field: 'product', headerName: 'Product', width: 300 ,renderCell:(params)=>{
            return(
                <div  className="productListItem">
                    <img className="productListImage" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 300 },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
        },
        {
          field: 'price',
          headerName: 'Price',
          width:200,
        },
        {
            field:"action",
            headerName:"Action",
            width:300,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to = {"/products/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick = {()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];
      

  return (
    <div className='productList'>
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

export default ProductList
