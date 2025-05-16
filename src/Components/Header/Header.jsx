import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { RiNftFill } from "react-icons/ri";
import { FaChartSimple, FaLock, FaUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div>
      {/* desktop size */}
      <div className="desktop-size hidden w-full min-md:hidden min-lg:block">
        <SidebarWrapper>
          <div>
            <h2 className="uppercase pb-3 ms-2 font-bold text-[var(--blue-color)] text-2xl">
              horizon <span className="font-light">free</span>
            </h2>
          </div>

          <ul>
            <li>
              <Link to="/" className="flex items-center gap-2">
                <IoHomeSharp />
                <h2>Dashboard</h2>
              </Link>
            </li>
            <li>
              <Link to="/nft_marketplace" className="flex items-center gap-2">
                <RiNftFill />
                <h2>NFT Marketplace</h2>
              </Link>
            </li>
            <li>
              <Link to="/tables" className="flex items-center gap-2">
                <FaChartSimple />
                <h2>Tables</h2>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-2">
                <FaUser />
                <h2>Profile</h2>
              </Link>
            </li>
            <li>
              <Link to="/signin" className="flex items-center gap-2">
                <FaLock />
                <h2>Sign In</h2>
              </Link>
            </li>
          </ul>
        </SidebarWrapper>
        
      </div>

      {/* responsive design */}
      <Responsive className="min-lg:hidden bg-white">
        <div className="p-2 relative shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="uppercase font-bold text-[var(--blue-color)] text-2xl">
              horizon <span className="font-light">free</span>
            </h2>
            {menu ? (
              <IoCloseCircleSharp
                onClick={handleMenu}
                className="text-[var(--blue-color)]"
                size={20}
              />
            ) : (
              <RiMenu3Line
                onClick={handleMenu}
                className="text-[var(--blue-color)]"
                size={20}
              />
            )}
          </div>

          <div
            className={`sidebar bg-white h-screen w-3/4 fixed top-0 left-0 z-50 p-5 transition-transform duration-300 ease-in-out ${
              menu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="space-y-4">
              <li onClick={handleMenu}>
                <Link to="/" className="flex items-center gap-2">
                  <IoHomeSharp />
                  <h2>Dashboard</h2>
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/nft_marketplace" className="flex items-center gap-2">
                  <RiNftFill />
                  <h2>NFT Marketplace</h2>
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/tables" className="flex items-center gap-2">
                  <FaChartSimple />
                  <h2>Tables</h2>
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/profile" className="flex items-center gap-2">
                  <FaUser />
                  <h2>Profile</h2>
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/signin" className="flex items-center gap-2">
                  <FaLock />
                  <h2>Sign In</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Responsive>
    </div>
  );
};

export default Header;

const SidebarWrapper = styled.section`
  padding-block: 16px;

  ul li {
    padding: 20px 10px;
    transition: 1s ease-in-out;
    cursor: pointer;
  }

  ul li:hover svg {
    color: #2b3674;
    font-weight: bold;
  }

  ul li:hover h2 {
    color: #2b3674;
    font-weight: bold;
  }
`;

const Responsive = styled.section``;
