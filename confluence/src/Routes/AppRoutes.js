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
import CreatorSignup from "../Pages/CreatorSignup/CreatorSignup.js";
import BrandSignup from "../Pages/BrandSignup/BrandSignup.js";
import Login from "../Pages/Login/Login.js";
import About from "../Pages/About/About.js";
import Influencers from "../Pages/Influencers/Influencers.js";
import SingleInfluencer from "../Pages/SingleInfluencer/SingleInfluencer.js";
import ComingSoon from "../Pages/ComingSoon/ComingSoon.js";
import Dashboard from "../Pages/Dashboard/Dashboard.js";
import Collaboration from "../Pages/Collaboration/Collaboration.js";

const Router = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes W/o Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />

          {/* Coming Soon */}
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/pricing" element={<ComingSoon />} />
          <Route path="/brands" element={<ComingSoon />} />

          {/* Routes W/ Layout */}
          <Route element={<Layout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/creator-signup" element={<CreatorSignup />} />
            <Route path="/brand-signup" element={<BrandSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/influencer/:name" element={<SingleInfluencer />} />
            {/* <Route
              path="/influencer/:name/collaborations"
              element={<SingleInfluencer />}
            /> */}
            <Route
              path=":userName/collaborations/:title"
              element={<Collaboration />}
            />
          </Route>

          {/* Protected Routes */}
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  user &&
                  (user.role === "admin" ||
                    user.role === "influencer" ||
                    user.role === "business")
                }
              />
            }>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
