import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../nav/nav";

function Users() {
  
  const users = useSelector((state) => state.users);
  console.log("Users ---->" , users);

  return (
    <>
    <Navbar/>
      <div className="p-4 container-width">
      <table className="table table-hover">
        <thead className="text-center mb-2">
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
                <td><img className="rounded-circle" src={user.image} height={100}/></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.country}</td>
                <td>{user.address}</td>
                <td>
                  <Link to={`/viewusers/${user._id}`}>
                    <button type="button" className="btn btn-outline-primary m-1">View</button>
                  </Link>
                  <button type="button" className="btn btn-outline-primary m-1">Update</button>
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

export default Users;