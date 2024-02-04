import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes.js";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../UseContext/UserContext.js";
import Layout from "../Routes/Layout.js";
import Home from "../Pages/Home/Home.js";
import Contact from "../Pages/Contact/Contact.js";
import Creators from "../Pages/Creators/Creators.js";

const Router = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/contact" element={<Contact />} />
          </Route>
            <Route path="/creators" element={<Creators />} />

          <Route path="/" element={<Home />} />

          <Route
            element={
              <ProtectedRoute
                isAllowed={user && user.role === "admin"}
                redirectPath="/unauthorized"
              />
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
