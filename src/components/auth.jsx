import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const IsAuth = () => {

  const location = useLocation();
  const IsAdmin = () =>{
    const token = localStorage.getItem("token");
    if (token){
      return true;
    }
    swal("Warning", "only Admin can accsses this" ,"warning", {button:false});
    return false;
  }

  // const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const checkUserToken = () => {
//     if (!token || token === "undefined") {
//       setIsLoggedIn(false);
//     //   return navigate("/login");
//     }
//     setIsLoggedIn(true);
//   };

  return (
    <>
      {IsAdmin() ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default IsAuth;

