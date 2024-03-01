import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../UseContext/UserContext.js";
import Loading from "../Components/Loading/Loading.js";

function ProtectedRoutes({ isAllowed, children }) {
  const { user, checkUser } = useContext(UserContext);

  if (checkUser) {
    return <Loading />;
  }

  if (!user && !checkUser) {
    return <Navigate to={"/login"} />;
  }

  if (!isAllowed && !checkUser) {
    return <Navigate to={"/unauthorized"} />;
  }

  if (user.role === "business") {
    return <Navigate to={"/coming-soon"} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
