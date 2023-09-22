import React from "react";
import { useSelector } from "react-redux";
import "../../style.css";
import Navbar from "../nav/nav";
import axiosInstance from "../../config/axiosConfig";


function Admins() {
  
  const admins = useSelector((state) => state.admins);
  console.log("Admins ---->" , admins);

  const deleteAdmin  = (adminId)=>{
    axiosInstance.delete(`/admins/${adminId}`).then(
      response => { 
        swal("Delete Admin" , "Admin has been deleted successfully" ,"success" , {button:false});
        console.log('Admin deleted successfully', response);
      }
    ).catch(error => {
      console.log('Error deleting Admin', error);
    });
  };

  return (
    <>
      <Navbar/>
      <div className="text-bg-light p-2 text-center" style={{ marginLeft: '20%' , backgroundColor:"#900c3f"}}>
        <h2 className="text-dark p-2">Count of Admins : {admins.length} </h2>
      </div>
      <div className="p-2 container-width">
      <table className="table table-hover m-0">
        <thead className="text-center">
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {admins.map((admin)=>{
            return(
              <tr key={admin._id}>
                <td>{admin.email}</td>
                <td>
                  <button type="button" className="btn" onClick={()=>deleteAdmin(admin._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      
    </>
  );
}

export default Admins;