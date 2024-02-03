import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../UseContext/UserContext.js";

function ProtectedRoutes({
  isAllowed,
  children,
  redirectPath = "/unauthorized",
}) {
  const { user, checkUser } = useContext(UserContext);

  if (checkUser) {
    return <div>Loading...</div>;
  }

  if (!user && !checkUser) {
    return <Navigate to={redirectPath} />;
  }

  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
