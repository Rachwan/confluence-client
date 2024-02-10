import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../UseContext/UserContext.js";
import Layout from "./Layout.js";
import Login from "../Pages/Login/Login.js";

function ProtectedRoutes({ isAllowed, children }) {
  const { user, checkUser } = useContext(UserContext);

  if (checkUser) {
    return <div>Loading...</div>;
  }

  if (!user && !checkUser) {
    return (
      <Navigate
        to={
          <Layout>
            <Login />
          </Layout>
        }
      />
    );
  }

  if (!isAllowed) {
    return (
      <Navigate
        to={
          <Layout>
            <Login />
          </Layout>
        }
      />
    );
  }

  if (user.role === "business") {
    return <Navigate to={"/coming-soon"} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
