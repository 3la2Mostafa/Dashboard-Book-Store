import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../nav/nav";
import axiosInstance from "../../config/axiosConfig";

function Users() {
  
  const users = useSelector((state) => state.users);
  console.log("Users ---->" , users);

  const deleteUser  = (userId)=>{
    axiosInstance.delete(`/users/${userId}`).then(
      response => { 
        swal("Delete user" , "User has been deleted successfully" ,"success" , {button:false});
        console.log('User deleted successfully', response);
      }
    ).catch(error => {
      console.log('Error deleting user', error);
    });
  };

  return (
    <>
    <Navbar/>
      <div className="p-4 container-width">
      <table className="table table-hover">
        <thead className="text-center rounded m-2">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center info-table">
          {users.map((user)=>{
            return(
              <tr key={user._id}>
                <td><img className="rounded-circle text-left align-middle" src={user.image} height={100}/></td>
                <td className="text-left align-middle">{user.firstName}</td>
                <td className="text-left align-middle">{user.lastName}</td>
                <td className="text-left align-middle">{user.email}</td>
                <td className="text-left align-middle">{user.phoneNumber}</td>
                <td className="text-left align-middle">{user.country}</td>
                <td className="text-left align-middle">{user.address}</td>
                <td className="text-left align-middle">
                  <Link to={`/viewusers/${user._id}`}>
                    <button type="button" className="btn btn-outline-primary mx-2">View</button>
                  </Link>
                  <button type="button" className="btn" onClick={()=>deleteUser(user._id)}>Delete</button>
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

export default Users;