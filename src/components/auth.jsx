import { Navigate, Outlet } from "react-router-dom";
import swal from "sweetalert";

const IsAuth = () => {

  const IsAdmin = () =>{
    const token = localStorage.getItem("token");
    if (token){
      return true;
    }
    swal("Warning", "only Admin can accsses this" ,"warning", {button:false});
    return false;
  };

  return (
    <>
      {IsAdmin() ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default IsAuth;

