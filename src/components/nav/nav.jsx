import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './nav.css';


function Navbar() {

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
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
            <span className="fs-5 logo" style={{fontFamily:'cursive'}}>Alef BookStore</span>
        </a>
        <hr/>

        <ul className="nav flex-column mb-auto">

        <NavLink to="/dashboard" className="nav-link" aria-current="page">
            <i className="bi bi-house-door"></i>
            <span>Dashboard</span>
        </NavLink>

       <NavLink to="/category" className="nav-link" aria-current="page">
            <i className="bi bi-grip-vertical"></i>
            <span>Category</span>
        </NavLink>

        <NavLink to="/books" className="nav-link">
            <i className="bi bi-book"></i>
            <span>Books</span>
        </NavLink> 

        <NavLink to="/addbook" className="nav-link" aria-current="page">
            <i className="bi bi-journal-plus"></i>
            <span>Add Book</span>
        </NavLink> 

        <NavLink to="/orders" className="nav-link" aria-current="page">
            <i className="bi bi-cart"></i>
            <span>Orders</span>
        </NavLink>

        <NavLink to="/users" className="nav-link" aria-current="page">
            <i className="bi bi-people"></i>
            <span>Users</span>
        </NavLink>

        <NavLink to="/admins" className="nav-link" aria-current="page">
            <i className="bi bi-person-gear"></i>
            <span>Admins</span>
        </NavLink><hr/>

        <NavLink to='/login' className="nav-link" aria-current="page" onClick={handleLogout}>
            <i className="bi bi-door-open"></i>
            <span>LogOut</span>
        </NavLink>

        </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
