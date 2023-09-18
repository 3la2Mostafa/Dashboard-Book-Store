import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";

const IsAuth = () => {

  const token = localStorage.getItem("token");

//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const checkUserToken = () => {
//     if (!token || token === "undefined") {
//       setIsLoggedIn(false);
//     //   return navigate("/login");
//     }
//     setIsLoggedIn(true);
//   };

  const location = useLocation();

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default IsAuth;

