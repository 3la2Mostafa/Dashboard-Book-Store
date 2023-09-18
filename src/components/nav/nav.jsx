import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './nav.css';


function Navbar() {

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
        swal("Successfuly Logout","Go to login form to login as new admin", "success", {button: false});
        navigate("/login");
        localStorage.clear();
        console.log("successfully logged out");
    } catch (err) {
        console.error("Error:", err);
    }
  };
  return (
    <>
      <div className="bg d-flex flex-column flex-shrink-0 p-3">
        <div className="div-navbar">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" href="index.html">
            <img src="/assets/img/nav_img.png" alt="logo" height="50" />
            <span className="fs-5 logo">Alef BookStore</span>
        </a>
        <hr/>

        <ul className="nav flex-column mb-auto">
        <NavLink to="/dashboard" >
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-house-door"></i>
                <span>Dashboard</span>
            </a>
        </NavLink>

        <NavLink to="/category" >
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-grip-vertical"></i>
                <span>Category</span>
            </a>
        </NavLink>
        
        <NavLink to="/books" >
            <a className="nav-link"  href="#">
                <i className="bi bi-book"></i>
                <span>Books</span>
            </a>
        </NavLink> 

        <NavLink to="/addbook">
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-journal-plus"></i>
                <span>Add Book</span>
            </a>
        </NavLink> 
        
        <NavLink to="/editbook">
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-pencil-square"></i>
                <span>Edit Book</span>
            </a>
        </NavLink>
       
        <NavLink to="/orders">
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-cart"></i>
                <span>Orders</span>
            </a>
        </NavLink>
      
        <NavLink to="/users">
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-people"></i>
                <span>Users</span>
            </a>
        </NavLink>
     
        <NavLink to="/admins">
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-people"></i>
                <span>Admins</span>
            </a>
        </NavLink><hr/>
{/*       
        <NavLink to="/addadmin">
            <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-person-plus"></i>
                <span>Add Admin</span>
            </a>
        </NavLink><hr/> */}

        <NavLink to='/login'>
            <a className="nav-link" aria-current="page" href="#" onClick={handleLogout}>
                <i className="bi bi-door-open"></i>
                <span>LogOut</span>
            </a>
        </NavLink>
        </ul>
       
        </div>

      </div>
    </>
  );
}

export default Navbar;
