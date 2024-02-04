import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes.js";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../UseContext/UserContext.js";
import Layout from '../Routes/Layout.js'
import Home from '../Pages/Home/Home.js'

const Router = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

          </Route>

          <Route path="/" element={<Home />} />

          <Route
            element={
              <ProtectedRoute
                isAllowed={user && user.role === "admin"}
                redirectPath="/unauthorized"
              />
            }>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
