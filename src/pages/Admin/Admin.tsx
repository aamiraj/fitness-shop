import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const Admin = () => {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.user?.role === "admin" || auth?.user?.role === "superAdmin") {
    return <Outlet />;
  }

  toast.error("You are not admin or super admin.");
  return <Navigate to={"/"}></Navigate>;
};

export default Admin;
