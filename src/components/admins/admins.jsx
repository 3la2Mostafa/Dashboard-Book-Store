import React from "react";
import { useSelector } from "react-redux";
import "../../style.css";
import Navbar from "../nav/nav";


function Admins() {
  
  const admins = useSelector((state) => state.admins);
  console.log("Admins ---->" , admins)

  return (
    <>
      <Navbar/>
      <div className="text-bg-light p-2 text-center" style={{ marginLeft: '20%' , backgroundColor:"#900c3f"}}>
        <h2 className="text-dark p-2">Count of Admins : {admins.length} </h2>
      </div>
      <div className="p-4 container-width" style={{ marginTop:"3%"}}>
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
                  <button type="button" className="btn btn-outline-primary">Delete</button>
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