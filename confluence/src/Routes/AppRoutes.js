import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes.js";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../UseContext/UserContext.js";
import Layout from "../Routes/Layout.js";
import Home from "../Pages/Home/Home.js";
import Contact from "../Pages/Contact/Contact.js";
import Creators from "../Pages/Creators/Creators.js";
import NotFound from "../Pages/NotFound/NotFound.js";

const Router = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes W/o Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />}/>

          {/* Routes W/ Layout */}
          <Route element={<Layout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/creators" element={<Creators />} />
          </Route>

          {/* Protected Routes */}
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
