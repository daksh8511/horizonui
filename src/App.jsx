import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Dashborad from "./Pages/Dashborad/Dashborad";

import NFTMarketplace from "./Pages/NFTMarketplace/NFTMarketplace";
import Tables from "./Pages/Tables/Tables";
import Profile from "./Pages/Profile/Profile";
import SignIn from "./Pages/SignIn/SignIn";
import Header from "./Components/Header/Header";

const App = () => {
  const mypath = useLocation();

  return (
    <div className="container flex relative">
      <div
        className={`${
          mypath.pathname == "/signin"
            ? "w-10/10 min-lg:w-1/10 gap-2 hidden z-10"
            : "w-10/10 min-[1024px]:w-[200px] gap-2 fixed z-10"
        }`}
      >
        <Header />
      </div>

      <div
        className={`${
          mypath.pathname == "/signin"
            ? "w-6/6 min-md:w-6/6 min-lg:w-6/6 absolute top-0 min-lg:top-0 right-0"
            : "w-6/6 min-md:w-6/6 min-lg:w-5/6 absolute top-12 min-lg:top-0 right-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<Dashborad />} />
          <Route
            path="/nft_marketplace"
            element={<NFTMarketplace />}
          />
          <Route path="/tables" element={<Tables />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
